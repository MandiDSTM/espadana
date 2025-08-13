// app/sitemap.xml/route.js
export const runtime = 'nodejs';       // هماهنگ با اجرای داخل کانتینر
export const revalidate = 3600;        // اختیاری: کش ۱ ساعته سمت سرور

export async function GET() {
  const baseUrl = 'https://spadanasolar.ir';
  const urls = [
    { loc: baseUrl,            lastmod: new Date().toISOString(), changefreq: 'weekly',  priority: '1.0' },
    { loc: `${baseUrl}/about`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.8' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `
      <url>
        <loc>${u.loc}</loc>
        <lastmod>${u.lastmod}</lastmod>
        <changefreq>${u.changefreq}</changefreq>
        <priority>${u.priority}</priority>
      </url>
    `).join('')}
  </urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
