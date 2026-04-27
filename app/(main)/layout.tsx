import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MouseFollower from "@/components/MouseFollower";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        
        <main className="min-h-screen bg-background">
            <Header />
                <MouseFollower/>
                {children}
            <Footer />
        </main>
    )
}