import DefaultLayout from "@/layouts/default";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Avatar,
  Divider,
  Link
} from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import wallet from "../pages/wallet.png";
import notepad from "../pages/notepad.png";
import folder from "../pages/folder.png";
import profile from "../pages/profile.png";
import credentials from "../pages/credentials.png";
import digital from "../pages/digital.png";
import screenshot from "../pages/screenshot.png"; // Add a screenshot of your app
import logo from "../pages/logo.png"; // Your logo

export default function Guest() {
  const features = [
    {
      title: "Military-Grade Encryption",
      description: "AES-256 encryption protects your data before it leaves your device",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "We never have access to your encryption keys or unencrypted data",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      )
    },
    {
      title: "Cross-Platform Sync",
      description: "Access your vault from any device with end-to-end encrypted sync",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  const products = [
    {
      title: "Payment Wallet",
      subtitle: "Secure financial store",
      icon: <img src={wallet} alt="Wallet" className="w-16 h-16 object-contain" />,
      status: "Coming Soon",
      color: "bg-purple-500/10 dark:bg-purple-400/10"
    },
    {
      title: "ID Sync",
      subtitle: "Digital identity protection",
      icon: <img src={digital} alt="Digital ID" className="w-16 h-16 object-contain" />,
      status: "Coming Soon",
      color: "bg-blue-500/10 dark:bg-blue-400/10"
    },
    {
      title: "Info Vault",
      subtitle: "Encrypted notes storage",
      icon: <img src={notepad} alt="Notepad" className="w-16 h-16 object-contain" />,
      status: "Available Now",
      color: "bg-green-500/10 dark:bg-green-400/10"
    },
    {
      title: "Key Locker",
      subtitle: "End-to-end encrypted passwords",
      icon: <img src={credentials} alt="Credentials" className="w-16 h-16 object-contain" />,
      status: "Available Now",
      color: "bg-yellow-500/10 dark:bg-yellow-400/10"
    },
    {
      title: "Key Locker",
      subtitle: "End-to-end encrypted passwords",
      icon: <img src={credentials} alt="Credentials" className="w-16 h-16 object-contain" />,
      status: "Available Now",
      color: "bg-yellow-500/10 dark:bg-yellow-400/10"
    },
    {
      title: "Key Locker",
      subtitle: "End-to-end encrypted passwords",
      icon: <img src={credentials} alt="Credentials" className="w-16 h-16 object-contain" />,
      status: "Available Now",
      color: "bg-yellow-500/10 dark:bg-yellow-400/10"
    }
  ];

  const testimonials = [
    {
      quote: "VaultX has revolutionized how I manage sensitive data. The encryption gives me peace of mind.",
      author: "Alex Johnson",
      role: "Security Engineer",
      avatar: "AJ"
    },
    {
      quote: "Finally a vault solution that's both powerful and intuitive. The biometric access is flawless.",
      author: "Sarah Chen",
      role: "Fintech CEO",
      avatar: "SC"
    },
    {
      quote: "As a privacy advocate, I recommend VaultX to all my clients for secure data storage.",
      author: "Michael Rodriguez",
      role: "Privacy Consultant",
      avatar: "MR"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      period: "forever",
      features: [
        "1GB Encrypted Storage",
        "Password Manager",
        "Secure Notes",
        "Basic Support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      features: [
        "10GB Encrypted Storage",
        "All Basic Features",
        "Document Vault",
        "Priority Support",
        "Shared Vaults"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited Storage",
        "All Pro Features",
        "Team Management",
        "Dedicated Support",
        "SAML SSO"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center gap-6 py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent dark:from-purple-600/5 dark:to-transparent opacity-20"></div>
        
        <div className="inline-block max-w-4xl text-center justify-center relative z-10">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="VaultX" className="h-12" />
          </div>
          
          <div className="mb-4 inline-block bg-violet-800/20 text-violet-400 px-4 py-2 rounded-full font-medium">
            Secure. Private. Yours.
          </div>
          
          <h1 className={title({ size: "lg" })}>
            Your <span className={title({ color: "violet", size: "lg" })}>Digital Fortress</span> Awaits
          </h1>
          
          <h2 className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
            Zero-knowledge encryption meets seamless access. Store, sync, and protect your digital life with military-grade security.
          </h2>
          
          <div className="mt-8 flex gap-4 justify-center">
            <Button 
              as={Link}
              href="/signup" 
              color="primary" 
              size="lg" 
              radius="full"
              className="shadow-lg"
            >
              Get Started - It's Free
            </Button>
            <Button 
              as={Link}
              href="/login"
              variant="flat" 
              size="lg" 
              radius="full"
            >
              Login
            </Button>
          </div>
        </div>
      </section>

      {/* Logo Cloud - Add your trusted by logos here if needed */}
      {/* <section className="py-12 bg-default-100/50 dark:bg-default-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-default-500 mb-8">Trusted by security-conscious users at</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="h-12 w-32 bg-default-200 dark:bg-default-800 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Why <span className="text-purple-600 dark:text-purple-400">VaultX</span>?
          </h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            The most secure way to protect your digital identity and sensitive information
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all" isHoverable>
              <CardBody className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold dark:text-white">{feature.title}</h3>
                <p className="text-default-500">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-default-100/50 dark:bg-default-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 dark:text-white">
              Your Complete <span className="text-purple-600 dark:text-purple-400">Security Suite</span>
            </h2>
            <p className="text-default-500 max-w-2xl mx-auto">
              Everything you need to protect your digital life in one place
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index}
                className={`${product.color} hover:shadow-lg transition-all h-full`}
                isHoverable
              >
                <CardBody className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-lg bg-white/80 dark:bg-black/20">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">{product.title}</h3>
                    <p className="text-sm text-default-500">{product.subtitle}</p>
                  </div>
                  <Chip 
                    color={
                      product.status === "Available Now" ? "success" : 
                      product.status === "Beta" ? "warning" : "default"
                    }
                    variant="dot"
                    size="sm"
                  >
                    {product.status}
                  </Chip>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Beautiful Interface, <span className="text-purple-600 dark:text-purple-400">Powerful Protection</span>
            </h2>
            <p className="text-default-500 mb-6">
              VaultX combines an intuitive, user-friendly interface with enterprise-grade security 
              features to give you complete control over your digital privacy.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="dark:text-white">Biometric authentication for instant access</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="dark:text-white">Automatic sync across all your devices</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="dark:text-white">Secure sharing with family or team members</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative max-w-md">
              <img 
                src={screenshot} 
                alt="VaultX App Interface" 
                className="rounded-xl shadow-2xl border border-default-200 dark:border-default-700" 
              />
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500/50 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-default-100/50 dark:bg-default-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 dark:text-white">
              Trusted by <span className="text-purple-600 dark:text-purple-400">Thousands</span> of Users
            </h2>
            <p className="text-default-500 max-w-2xl mx-auto">
              Join security-conscious individuals and businesses who trust VaultX
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow h-full">
                <CardBody className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar
                      isBordered
                      color="secondary"
                      className="flex-shrink-0"
                      name={testimonial.avatar}
                    />
                    <div>
                      <p className="font-semibold dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-default-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic text-default-600">"{testimonial.quote}"</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Simple, <span className="text-purple-600 dark:text-purple-400">Transparent</span> Pricing
          </h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? "ring-2 ring-purple-500" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              <CardHeader className="pb-0">
                <h3 className="text-xl font-bold dark:text-white">{plan.name}</h3>
              </CardHeader>
              <CardBody className="pt-2">
                <div className="mb-6">
                  <span className="text-4xl font-bold dark:text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-default-500"> / {plan.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="dark:text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button 
                  as={Link}
                  href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                  color={plan.popular ? "primary" : "default"}
                  variant={plan.popular ? "solid" : "flat"}
                  fullWidth
                  radius="full"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Digital Life?</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Join VaultX today and experience peace of mind with military-grade encryption for all your sensitive data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as={Link}
              href="/signup"
              color="secondary" 
              size="lg" 
              radius="full" 
              variant="shadow"
              className="shadow-lg"
            >
              Get Started - It's Free
            </Button>
            <Button 
              as={Link}
              href="/login"
              color="default" 
              size="lg" 
              radius="full" 
              variant="ghost" 
              className="text-white"
            >
              Login to Your Account
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}