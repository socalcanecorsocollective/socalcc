import glyph from "@/assets/glyph.png.asset.json";
import wordmark from "@/assets/wordmark.png.asset.json";

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-gold/20">
      <div className="container-editorial py-20">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <img src={glyph.url} alt="SCCC glyph" className="h-14 w-auto mb-6" />
            <p className="text-mist text-sm max-w-sm leading-relaxed">
              SoCal Cane Corso Co. — a guardian brand of tactical apparel and
              pack gear. Built on instinct. Defined by discipline.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow mb-4 text-cream/50">Shop</p>
              <ul className="space-y-2.5 text-sm text-mist">
                <li><a href="#apparel" className="hover:text-gold transition-colors">Apparel</a></li>
                <li><a href="#gear" className="hover:text-gold transition-colors">Pack Gear</a></li>
                <li><a href="#reserve" className="hover:text-gold transition-colors">Reserve</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4 text-cream/50">House</p>
              <ul className="space-y-2.5 text-sm text-mist">
                <li><a href="#bloodline" className="hover:text-gold transition-colors">The Bloodline</a></li>
                <li><a href="#lookbook" className="hover:text-gold transition-colors">Lookbook</a></li>
                <li><a href="#reserve" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3 md:text-right">
            <p className="eyebrow mb-4 text-cream/50 md:text-right">Follow</p>
            <ul className="space-y-2.5 text-sm text-mist md:text-right">
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <img src={wordmark.url} alt="SoCal Cane Corso" className="h-4 md:h-5 w-auto opacity-70" />
          <p className="text-xs tracking-[0.28em] uppercase text-muted-ink">
            © MMXXVI SCCC · Est. MMXX · Loyal for Life
          </p>
        </div>
      </div>
    </footer>
  );
}
