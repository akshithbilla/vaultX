import DefaultLayout from "@/layouts/default";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
 
  Chip,
  Avatar
} from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import wallet from "./wallet.png";
import notepad from "./notepad.png";
import folder from "./folder.png";
import profile from "./profile.png";
import credentials from "./credentials.png";
import digital from "./digital.png"
//import { ThemeSwitch } from "@/components/theme-switch";

export default function IndexPage() {
  const features = [
    {
      title: "Payment Wallet",
      subtitle: "Secure financial store",
      label: "Card Vault",
      icon: <img src={wallet} alt="vault icon" className="w-16 h-16 object-contain" />,
      status: "Coming Soon",
      color: "bg-purple-500/10 dark:bg-purple-400/10"
    },
    {
      title: "ID Sync",
      subtitle: "Digital identity protection",
      label: "Digital IDs",
      icon: <img src={digital} alt="vault icon" className="w-16 h-16 object-contain" />,
      status: "Coming Soon",
      color: "bg-blue-500/10 dark:bg-blue-400/10"
    },
    {
      title: "Info Vault",
      subtitle: "Encrypted notes storage",
      label: "Secure Notes",
      icon: <img src={notepad} alt="vault icon" className="w-16 h-16 object-contain" />,
      status: "Available Now",
      color: "bg-green-500/10 dark:bg-green-400/10"
    },
    {
      title: "Identity Capsule",
      subtitle: "Your complete digital profile",
      label: "Profile",
      icon: <img src={profile} alt="vault icon" className="w-16 h-16 object-contain" />,
      status: "Beta",
      color: "bg-pink-500/10 dark:bg-pink-400/10"
    },
    {
      title: "Key Locker",
      subtitle: "End-to-end encrypted passwords",
      label: "Credentials",
      icon: <img src={credentials} alt="vault icon" className="w-16 h-16 object-contain" />,
      status: "Available Now",
      color: "bg-yellow-500/10 dark:bg-yellow-400/10"
    },
    {
      title: "DocSafe",
      subtitle: "Private cloud storage",
      label: "Smart Storage",
      icon: <img src={folder} alt="vault icon" className="w-16 h-16 object-contain" />,
      status: "Available Now",
      color: "bg-red-500/10 dark:bg-red-400/10"
    },
  ];

  const testimonials = [
    {
      quote: "VaultX has revolutionized how I manage sensitive data. The encryption gives me peace of mind.",
      author: "Alex Johnson",
      role: "Security Engineer"
    },
    {
      quote: "Finally a vault solution that's both powerful and intuitive. The biometric access is flawless.",
      author: "Sarah Chen",
      role: "Fintech CEO"
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center gap-6 py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent dark:from-purple-600/5 dark:to-transparent opacity-20"></div>
        
        <div className="inline-block max-w-4xl text-center justify-center relative z-10">
        <div className="mb-4 inline-block bg-violet-800/20 text-violet-400 px-4 py-2 rounded-full font-medium">
  Secure. Private. Yours.
</div>


          
          <h1 className={title({ size: "lg" })}>
  Your <span className={title({ color: "violet", size: "lg" })}>Digital Fortress</span>
</h1>

          
          <h2 className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
            Zero-knowledge encryption meets seamless access. Store, sync, and protect your digital life with military-grade security.
          </h2>
          
          <div className="mt-8 flex gap-4 justify-center">
            <Button color="primary" size="lg" radius="full">
              Get Started
            </Button>
            <Button variant="flat" size="lg" radius="full">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Your Complete <span className="text-purple-600 dark:text-purple-400">Security Suite</span>
          </h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            Six layers of protection for every aspect of your digital identity
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`${feature.color} hover:shadow-lg transition-all duration-300 h-full`}
              isHoverable
              isPressable
            >
              <CardHeader className="flex flex-col items-start">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-white/80 dark:bg-black/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-default-500">{feature.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-xl font-bold dark:text-white">{feature.label}</p>
              </CardBody>
              <CardFooter className="flex justify-between items-center">
                <Chip 
                  color={
                    feature.status === "Available Now" ? "success" : 
                    feature.status === "Beta" ? "warning" : "default"
                  }
                  variant="dot"
                >
                  {feature.status}
                </Chip>
                <Button 
                  size="sm" 
                  radius="full" 
                  variant={feature.status === "Available Now" ? "solid" : "flat"}
                  color={feature.status === "Available Now" ? "primary" : "default"}
                >
                  {feature.status === "Available Now" ? "Access Now" : "Notify Me"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-default-100/50 dark:bg-default-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 dark:text-white">
              Military-Grade <span className="text-purple-600 dark:text-purple-400">Protection</span>
            </h2>
            <p className="text-default-500 max-w-2xl mx-auto">
              Your data is secured with the same technology used by governments and financial institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-default-900 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">AES-256 Encryption</h3>
              <p className="text-default-500">Your data is encrypted before it leaves your device with industry-leading algorithms.</p>
            </div>

            <div className="bg-white dark:bg-default-900 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Zero-Knowledge Architecture</h3>
              <p className="text-default-500">We never have access to your encryption keys or unencrypted data.</p>
            </div>

            <div className="bg-white dark:bg-default-900 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Biometric Access</h3>
              <p className="text-default-500">Secure authentication with Face ID, Touch ID, or Windows Hello integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Trusted by <span className="text-purple-600 dark:text-purple-400">Security-Conscious</span> Users
          </h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            Join thousands who've secured their digital lives with VaultX
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardBody>
                <div className="flex gap-4">
                  <Avatar
                    isBordered
                    color="secondary"
                    className="flex-shrink-0"
                    name={testimonial.author}
                  />
                  <div>
                    <p className="italic text-default-600 mb-2">"{testimonial.quote}"</p>
                    <p className="font-semibold dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-default-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Digital Life?</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Join VaultX today and experience peace of mind with military-grade encryption for all your sensitive data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button color="secondary" size="lg" radius="full" variant="shadow">
              Get Started - It's Free
            </Button>
            <Button color="default" size="lg" radius="full" variant="ghost" className="text-white">
              See Pricing Plans
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}