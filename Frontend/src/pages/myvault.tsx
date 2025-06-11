import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Avatar,
  Tabs,
  Tab,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider
} from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
// Mock data - replace with your actual data fetching logic
const vaultData = {
  "Payment Wallet": [
    { id: 1, name: "Primary Credit Card", type: "VISA", last4: "4242", updated: "2 days ago" },
    { id: 2, name: "PayPal Account", type: "PayPal", email: "user@example.com", updated: "1 week ago" }
  ],
  "ID Sync": [
    { id: 3, name: "Passport", type: "Document", country: "US", expiry: "2028-05-15", updated: "1 month ago" },
    { id: 4, name: "Driver License", type: "Document", state: "CA", expiry: "2026-11-30", updated: "3 weeks ago" }
  ],
  "Info Vault": [
    { id: 5, name: "API Keys", type: "Note", preview: "sk_live_*****", updated: "5 days ago" },
    { id: 6, name: "Recovery Codes", type: "Secure Note", preview: "2FA backup codes...", updated: "2 weeks ago" }
  ],
  "Key Locker": [
    { id: 7, name: "Gmail", type: "Login", username: "user@gmail.com", updated: "1 day ago" },
    { id: 8, name: "AWS Console", type: "Login", username: "admin", updated: "3 days ago" }
  ],
  "DocSafe": [
    { id: 9, name: "Tax Return 2023", type: "PDF", size: "2.4 MB", updated: "1 month ago" },
    { id: 10, name: "House Contract", type: "Document", size: "5.1 MB", updated: "2 months ago" }
  ]
};

const categoryIcons = {
  "Payment Wallet": (
    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "ID Sync": (
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
    </svg>
  ),
  "Info Vault": (
    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  "Key Locker": (
    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  "DocSafe": (
    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
};

export default function MyVaultPage() {
  const [activeCategory, setActiveCategory] = useState("Payment Wallet");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = vaultData[activeCategory].filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DefaultLayout>  <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <section className="mb-8">
        <h1 className={title({ size: "lg" })}>
          My <span className={title({ color: "violet", size: "lg" })}>Vault</span>
        </h1>
        <p className={subtitle({ class: "mt-2" })}>
          All your secured items in one place, protected with military-grade encryption
        </p>
      </section>

      {/* Search and Filter Bar */}
      <section className="mb-6 flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search your vault..."
          startContent={
            <svg className="w-5 h-5 text-default-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          }
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="flat" endContent={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            }>
              Sort By: Recent
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="recent">Recent</DropdownItem>
            <DropdownItem key="name">Name</DropdownItem>
            <DropdownItem key="type">Type</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Categories Sidebar */}
        <div className="lg:w-1/4">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-lg font-semibold">Categories</h2>
            </CardHeader>
            <CardBody className="p-0">
              <div className="space-y-1">
                {Object.keys(vaultData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 ${activeCategory === category 
                      ? "bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400" 
                      : "hover:bg-default-100 dark:hover:bg-default-800"}`}
                  >
                    <div className="p-2 rounded-lg bg-white/80 dark:bg-black/20">
                      {categoryIcons[category]}
                    </div>
                    <span>{category}</span>
                    <Chip size="sm" className="ml-auto">{vaultData[category].length}</Chip>
                  </button>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Items Grid */}
        <div className="lg:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/80 dark:bg-black/20">
                {categoryIcons[activeCategory]}
              </div>
              {activeCategory}
            </h3>
            <Button color="primary" size="sm">
              Add New
            </Button>
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <Card key={item.id} isPressable isHoverable className="hover:shadow-lg transition-all">
                  <CardHeader className="flex items-start gap-3">
                    <Avatar
                      isBordered
                      radius="sm"
                      color={
                        activeCategory === "Payment Wallet" ? "secondary" :
                        activeCategory === "ID Sync" ? "primary" :
                        activeCategory === "Info Vault" ? "success" :
                        activeCategory === "Key Locker" ? "warning" : "danger"
                      }
                      name={item.name.charAt(0)}
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-default-500">{item.type}</p>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0 px-4">
                    <div className="text-sm space-y-1">
                      {item.last4 && <p>•••• •••• •••• {item.last4}</p>}
                      {item.email && <p>{item.email}</p>}
                      {item.country && <p>{item.country}</p>}
                      {item.preview && <p className="text-default-400">{item.preview}</p>}
                      {item.size && <p>{item.size}</p>}
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-xs text-default-500">{item.updated}</span>
                    <Button size="sm" variant="light">
                      View
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardBody className="text-center py-12">
                <svg className="w-12 h-12 mx-auto text-default-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg font-medium mt-4">No items found</h4>
                <p className="text-default-500 mt-1">
                  {searchQuery ? "Try a different search term" : `No items in ${activeCategory}`}
                </p>
              </CardBody>
            </Card>
          )}
        </div>
      </div>

      {/* Security Assurance */}
      <section className="mt-12 grid sm:grid-cols-2 gap-4">
        <Card className="bg-purple-500/10 dark:bg-purple-400/10">
          <CardBody>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/80 dark:bg-black/20">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Zero-Knowledge Encryption</h3>
                <p className="text-sm text-default-500">Only you can access your data</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-blue-500/10 dark:bg-blue-400/10">
          <CardBody>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/80 dark:bg-black/20">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">End-to-End Secure</h3>
                <p className="text-sm text-default-500">Protected from upload to storage</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
    </DefaultLayout>
  
  );
}