
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <img 
          src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-and-futuristic-scene-featuring-a.png/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true"
          alt="Futuristic AI Scene"
          className="w-full max-w-6xl mx-auto my-20 rounded-2xl shadow-2xl"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
