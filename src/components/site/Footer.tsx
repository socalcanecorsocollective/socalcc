import glyph from "@/assets/glyph.png.asset.json";
import wordmark from "@/assets/wordmark.png.asset.json";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-gold/20">
      <div className="container-editorial py-20">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <img src={glyph.url} alt="SCCC glyph" className="h-14 w-auto mb-6" />
            <p className="text-mist text-sm max-w-sm leading-relaxed">
              SoCal Cane Corso Co. — an artist-run house of guardian apparel and
              pack gear. Built on instinct. Defined by discipline. Loyal for life.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow mb-4 text-cream/50">Shop</p>
              <ul className="space-y-2.5 text-sm text-mist">
                <li><Link to="/shop" className="hover:text-gold">All</Link></li>
                <li><Link to="/shop" className="hover:text-gold">Apparel</Link></li>
                <li><Link to="/shop" className="hover:text-gold">Pack Gear</Link></li>
                <li><Link to="/shop" className="hover:text-gold">Patches & Prints</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4 text-cream/50">House</p>
              <ul className="space-y-2.5 text-sm text-mist">
                <li><Link to="/collective" className="hover:text-gold">Collective</Link></li>
                <li><Link to="/drops" className="hover:text-gold">Drops</Link></li>
                <li><Link to="/bloodline" className="hover:text-gold">Bloodline</Link></li>
                <li><Link to="/reserve" className="hover:text-gold">Reserve</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3 md:text-right">
            <p className="eyebrow mb-4 text-cream/50 md:text-right">Follow</p>
            <ul className="space-y-2.5 text-sm text-mist md:text-right">
              <li><a href="#" className="hover:text-gold">Instagram</a></li>
              <li><a href="#" className="hover:text-gold">TikTok</a></li>
              <li><a href="#" className="hover:text-gold">YouTube</a></li>
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
