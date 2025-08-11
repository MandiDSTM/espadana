import { notFound } from 'next/navigation'
import Navbar from '@/app/components/layout/Navbar'
import LinkWithProgress from '@/app/components/linkWithProgress/LinkWithProgress'
import DropDown from '../../components/ui/dropdown/DropDown'
import Image from 'next/image'
import WhatsAppButton from "@/app/components/ui/whatsupButton/WhatsButton";
import CatalogDownload from '../../components/CatalogeDownload';
import Footer from '@/app/components/layout/Footer'
import {
  Star,
  Award,
  Shield,
  Truck,
  CheckCircle,
  AlertCircle,
} from "lucide-react";


const formatPrice = (price) => {
  if (price === null || price === undefined) return null;
  const num = typeof price === 'string' ? Number(price) : price;
  if (isNaN(num)) return null;
  return num.toLocaleString("fa-IR");
};



const renderSection = (title, content, icon = null) => {
  if (!content) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      {content}
    </div>
  );
};

// ISR settings and static params
export async function generateStaticParams() {
  try {
    const res = await fetch('https://blog.launch-team.ir/api/spadana-items?fields[0]=slug', {
      next: { revalidate: 60 }
    });

    if (!res.ok) throw new Error('Failed to fetch slugs');

    const json = await res.json();
    return json.data.map(p => ({ slug: p.slug }));
  } catch (error) {
    console.error('generateStaticParams error:', error);
    return [];
  }
}


export const revalidate = 60

export default async function ProductsPage({ params }) {

  const { slug } = await params;

  const res = await fetch(
    `https://blog.launch-team.ir/api/spadana-items?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return notFound();

  const { data } = await res.json();

  if (!data || data.length === 0) return notFound();

  const result = data[0]; // محصول مورد نظر


  if (!result) return notFound()

  // You can filter products based on params.slug if needed


  const renderSpecifications = async () => {
    const res = await result.Specifications[0]?.Code?.specifications
    if (!res) return null;
    return (
      <div
        className="grid grid-cols-1  gap-4 ">
        {Object.entries(res).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 md:text-base text-sm"
            dir="ltr"
          >
            <span className="text-gray-600 font-medium">{key}</span>
            <span className="text-gray-900 font-semibold text-right">
              {typeof value === "object" ? JSON.stringify(value) : value}
            </span>
          </div>
        ))}
      </div>
    );
  };
  const renderModels = () => {
    if (!result.models) return null;

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-right">
                مدل
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                قدرت خروجی
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                حداکثر قدرت ظاهری
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                جریان خروجی
              </th>
            </tr>
          </thead>
          <tbody>
            {product.models.map((model, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  {model.model}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {model.ratedACOutputActivePower || model.ratedPower}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {model.maxACOutputApparentPower || model.maxACApparentPower}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {model.ratedACOutputCurrent || model.ratedACCurrent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };



  const renderElectricalParameters = () => {
    const electricalParameters = result?.Specifications?.[0]?.Code?.electricalParameters;

    if (!electricalParameters) return null;

    return (
      <div className="space-y-6">
        {/* STC Parameters */}
        {electricalParameters.stc && (
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600">
              پارامترهای STC
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-right">نوع ماژول</th>
                    <th className="border border-gray-300 px-4 py-2 text-right">حداکثر قدرت</th>
                    <th className="border border-gray-300 px-4 py-2 text-right">ولتاژ مدار باز</th>
                    <th className="border border-gray-300 px-4 py-2 text-right">جریان اتصال کوتاه</th>
                    <th className="border border-gray-300 px-4 py-2 text-right">راندمان</th>
                  </tr>
                </thead>
                <tbody>
                  {electricalParameters.stc.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">{item.moduleType}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.maxPower}W</td>
                      <td className="border border-gray-300 px-4 py-2">{item.openCircuitVoltage}V</td>
                      <td className="border border-gray-300 px-4 py-2">{item.shortCircuitCurrent}A</td>
                      <td className="border border-gray-300 px-4 py-2">{item.moduleEfficiency}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* NMOT Parameters */}
        {electricalParameters.nmot && (
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-600">
              پارامترهای NMOT
            </h4>
            <div className="grid grid-cols-1 gap-4" style={{ direction: "ltr" }}>
              {Object.entries(electricalParameters.nmot).map(([key, value]) => (
                <div
                  key={key}
                  dir="ltr"
                  className="flex justify-between items-center py-2 border-b border-gray-100"
                >
                  <span className="text-gray-600">{key}</span>
                  <span className="text-gray-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar scrollValue={true} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-20">
        {/* Product Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={`https://blog.launch-team.ir${result.cover.url}`}
                  alt={result.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Product Status Badges */}
              <div className="flex flex-wrap gap-2">
                {result.isNew && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    جدید
                  </span>
                )}
                {result.available ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    موجود در انبار
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    ناموجود
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-10 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {result.title}
                </h1>
                <p className="text-sm text-gray-600">{result.spadana_category?.name}</p>

                <div className="space-y-4 mt-8">
                  {/* Rating */}
                  {result.rate && (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(result.rate)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600">({result.rate})</span>
                      {result.reviews && (
                        <span className="text-gray-500">• {result.reviews} نظر</span>
                      )}
                    </div>
                  )}

                  {/* Price */}
                  <div className="space-y-2">
                    {result.price && result.price != 0 ? (
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-blue-600">
                          {formatPrice(result.price)} تومان
                        </span>
                        {result.originalPrice &&
                          result.originalPrice > result.price && (
                            <span className="text-lg line-through text-gray-500">
                              {formatPrice(result.originalPrice)} تومان
                            </span>
                          )}
                      </div>
                    ) : (
                      <div className="text-xl font-bold text-gray-700">
                        قیمت: تماس بگیرید
                      </div>
                    )}

                    {result.originalPrice &&
                      result.price &&
                      result.originalPrice > result.price && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                          {Math.round(
                            ((result.originalPrice - result.price) /
                              result.originalPrice) *
                            100
                          )}
                          % تخفیف
                        </div>
                      )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{result.description}</p>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <WhatsAppButton />
                </div>
                <button>
                  <CatalogDownload />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Specifications */}
            {renderSection(
              "مشخصات فنی",
              renderSpecifications(),
              <Award className="w-6 h-6 text-blue-600" />
            )}

            {/* Electrical Parameters */}
            {renderSection(
              "پارامترهای الکتریکی",
              renderElectricalParameters(),
              <Shield className="w-6 h-6 text-green-600" />
            )}

            {/* Models */}
            {renderSection(
              "مدل‌های موجود",
              renderModels(),
              <CheckCircle className="w-6 h-6 text-purple-600" />
            )}

            {/* Temperature Characteristics */}
            
            {result.temperatureCharacteristics &&
              renderSection(
                "مشخصات دمایی",
                <div className="grid grid-cols-1 gap-4" dir="ltr">
                  {Object.entries(result.temperatureCharacteristics).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-gray-100"
                      >
                        <span className="text-gray-600">{key}</span>
                        <span className="text-gray-900 font-medium">{value}</span>
                      </div>
                    )
                  )}
                </div>
              )}

            {/* Maximum Ratings */}
            {result.maximumRatings &&
              renderSection(
                "حداکثر مقادیر",
                <div dir="ltr" className="grid grid-cols-1 gap-4">
                  {Object.entries(result.maximumRatings).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-2 border-b border-gray-100"
                    >
                      <span className="text-gray-600">{key}</span>
                      <span className="text-gray-900 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 mb-10">
            {/* Features */}
            {result.Features[0]?.FeatureDetailsJson?.features &&
              renderSection(
                "ویژگی‌های کلیدی",
                <ul className="space-y-3 mt-5">
                  {result.Features[0]?.FeatureDetailsJson?.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 shadow-sm px-1 rounded-lg py-2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

            {result.Features[0]?.FeatureDetailsJson?.protectionFeatures  &&
              renderSection(
                "ویژگی‌های حفاظتی",
                <ul className="space-y-2">
                  {result.Features[0]?.FeatureDetailsJson?.protectionFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}


            {/* Certifications */}
            {result.Certifications[0]?.FeatureDetailsJson?.certifications &&
              renderSection(
                "گواهینامه‌ها",
                <div className="flex flex-wrap gap-2">
                  {result.Certifications[0]?.FeatureDetailsJson?.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              )}

            {result.BuilderInfo[0]?.BuilderInfoJson?.manufacturer &&
              renderSection(
                "اطلاعات سازنده",
                <div dir="ltr" className="space-y-3 text-left "
                >
                  {Object.entries(result.BuilderInfo[0]?.BuilderInfoJson?.manufacturer).map(([key, value]) => (
                    <div key={key} className="text-left">
                      <span className="text-gray-600 block mb-1 text-left">{key}: </span>
                      <span className="text-gray-900 font-medium break-all ">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>,
                <Truck className="w-6 h-6 text-orange-600" />
              )}


          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

}
