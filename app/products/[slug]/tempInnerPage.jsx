import React from "react";
import { sampleProducts } from "@/data/products/products";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import CatalogDownload from '../../components/CatalogeDownload';
import {
  Star,
  Award,
  Shield,
  Truck,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import WhatsAppButton from "@/app/components/ui/whatsupButton/WhatsButton";

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const productId = Number(id);
  const product = sampleProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            محصول پیدا نشد
          </h1>
          <p className="text-gray-600">محصول مورد نظر در دسترس نمی‌باشد</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    if (price === null || price === undefined) return null;
    return price.toLocaleString("fa-IR");
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

  const renderSpecifications = () => {
    if (!product.specifications) return null;

    return (
      <div
        className="grid grid-cols-1  gap-4 ">
        {Object.entries(product.specifications).map(([key, value]) => (
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

  const renderElectricalParameters = () => {
    if (!product.electricalParameters) return null;

    return (
      <div className="space-y-6 ">
        {/* STC Parameters */}
        {product.electricalParameters.stc && (
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600">
              پارامترهای STC
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-right">
                      نوع ماژول
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-right">
                      حداکثر قدرت
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-right">
                      ولتاژ مدار باز
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-right">
                      جریان اتصال کوتاه
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-right">
                      راندمان
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.electricalParameters.stc.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        {item.moduleType}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.maxPower}W
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.openCircuitVoltage}V
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.shortCircuitCurrent}A
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.moduleEfficiency}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* NMOT Parameters */}
        {product.electricalParameters.nmot && (
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-600">
              پارامترهای NMOT
            </h4>
            <div className="grid grid-cols-1  gap-4"
              style={{ direction: "ltr !important" }}
            >
              {Object.entries(product.electricalParameters.nmot).map(
                ([key, value]) => (
                  <div
                    key={key}
                    dir="ltr"
                    className="flex justify-between items-center py-2 border-b border-gray-100"
                  >
                    <span className="text-gray-600">{key}</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderModels = () => {
    if (!product.models) return null;

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar scrollValue={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-20">
        {/* Product Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="h-96 bg-gray-100 rounded-lg overflow-hidden  ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Status Badges */}
              <div className="flex flex-wrap gap-2 ">
                {product.isNew && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    جدید
                  </span>
                )}
                {product.inStock ? (
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
            <div className="space-y-10  flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2 ">
                  {product.name}
                </h1>
                <p className="text-sm text-gray-600">{product.category}</p>

                <div className="space-y-4 mt-8">
                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600">({product.rating})</span>
                      {product.reviews && (
                        <span className="text-gray-500">
                          • {product.reviews} نظر
                        </span>
                      )}
                    </div>
                  )}
                  {/* Price */}
                  <div className="space-y-2">
                    {product.price ? (
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-blue-600">
                          {formatPrice(product.price)} تومان
                        </span>
                        {product.originalPrice &&
                          product.originalPrice > product.price && (
                            <span className="text-lg line-through text-gray-500">
                              {formatPrice(product.originalPrice)} تومان
                            </span>
                          )}
                      </div>
                    ) : (
                      <div className="text-xl font-bold text-gray-700">
                        قیمت: تماس بگیرید
                      </div>
                    )}

                    {product.originalPrice &&
                      product.price &&
                      product.originalPrice > product.price && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                          {Math.round(
                            ((product.originalPrice - product.price) /
                              product.originalPrice) *
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
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quick Actions */}

              <div className="flex gap-4 ">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
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
            {product.temperatureCharacteristics &&
              renderSection(
                "مشخصات دمایی",
                <div className="grid grid-cols-1 gap-4"
                  dir="ltr"
                >
                  {Object.entries(product.temperatureCharacteristics).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-gray-100"
                      >
                        <span className="text-gray-600">{key}</span>
                        <span className="text-gray-900 font-medium">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}

            {/* Maximum Ratings */}
            {product.maximumRatings &&
              renderSection(
                "حداکثر مقادیر",
                <div dir="ltr" className="grid grid-cols-1  gap-4">
                  {Object.entries(product.maximumRatings).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-gray-100"
                      >
                        <span className="text-gray-600">{key}</span>
                        <span className="text-gray-900 font-medium">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 mb-10">
            {/* Features */}
            {product.features &&
              renderSection(
                "ویژگی‌های کلیدی",
                <ul className="space-y-3 mt-5">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 shadow-sm px-1 rounded-lg  py-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0  " />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

            {/* Protection Features */}
            {product.protectionFeatures &&
              renderSection(
                "ویژگی‌های حفاظتی",
                <ul className="space-y-2">
                  {product.protectionFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

            {/* Certifications */}
            {product.certifications &&
              renderSection(
                "گواهینامه‌ها",
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              )}

            {/* Warranty */}
            {product.warranty &&
              renderSection(
                "گارانتی",
                <div dir="ltr" className="space-y-3 mt-5 text-left">
                  {Object.entries(product.warranty).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center text-left"
                    >
                      <span className="text-gray-600">{key}</span>
                      <span className="text-gray-900 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              )}

            {/* Communication */}
            {product.communication &&
              renderSection(
                "ارتباطات",
                <div className="space-y-3">
                  {Object.entries(product.communication).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-gray-600 block mb-1">{key}:</span>
                      <span className="text-gray-900 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              )}

            {/* Manufacturer */}
            {product.manufacturer &&
              renderSection(
                "اطلاعات سازنده",
                <div dir="ltr" className="space-y-3 text-left "
                >
                  {Object.entries(product.manufacturer).map(([key, value]) => (
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
  );
}


