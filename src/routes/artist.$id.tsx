import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { ProductCard } from "@/components/site/ProductCard";
import { MascotSeal } from "@/components/site/MascotSeal";
import { getArtist } from "@/lib/artists";
import { productsByArtist } from "@/lib/products";

export const Route = createFileRoute("/artist/$id")({
  loader: ({ params }) => {
    const artist = getArtist(params.id);
    if (!artist) throw notFound();
    return { artist };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Artist not found" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${loaderData.artist.name} — SCCC Collective` },
        { name: "description", content: loaderData.artist.bio },
      ],
    };
  },
  component: ArtistPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-ink text-cream">
      <div className="text-center">
        <p className="eyebrow mb-4">Artist not found</p>
        <Link to="/collective" className="btn-reserve">Back to Collective</Link>
      </div>
    </div>
  ),
});

function ArtistPage() {
  const { artist } = Route.useLoaderData();
  const pieces = productsByArtist(artist.id);

  return (
    <>
      <Nav />
      <CartDrawer />
      <main className="bg-ink pt-32 pb-24">
        <div className="container-editorial">
          <p className="eyebrow mb-6">Founding Artist · Chapter 001</p>
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-end mb-16">
            <MascotSeal variant="seal" className="h-32 w-32" />
            <div>
              <h1 className="title-xl text-cream mb-4">{artist.name}</h1>
              <p className="text-xs text-mist tracking-widest">{artist.handle}</p>
            </div>
          </div>

          <div className="hairline mb-12" />

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <p className="text-cream text-lg leading-relaxed italic max-w-xl">"{artist.statement}"</p>
            <p className="text-mist text-base leading-relaxed max-w-xl">{artist.bio}</p>
          </div>

          <div className="hairline mb-12" />
          <p className="eyebrow mb-8">Pieces from this chapter</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14">
            {pieces.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
