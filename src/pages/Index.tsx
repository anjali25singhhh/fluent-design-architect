
import React, { useState } from "react";
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarItem, 
  SidebarProvider, 
  SidebarSection, 
  SidebarFooter 
} from "@/components/design-system/Sidebar";
import { 
  TabsRoot, 
  TabsList, 
  TabTrigger, 
  TabContent 
} from "@/components/design-system/Tabs";
import { 
  Accordion, 
  AccordionItem 
} from "@/components/design-system/Accordion";
import { Badge } from "@/components/design-system/Badge";
import { ColorSystem } from "@/components/design-system/ColorSystem";

// Lucide Icons
import { 
  Home, 
  Palette, 
  Tag, 
  ChevronDown, 
  Layers, 
  Tabs, 
  CircleX, 
  CircleCheck, 
  CircleAlert, 
  CircleInfo, 
  Settings, 
  User
} from "lucide-react";

const Index = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState("colors");
  
  // Accordion state
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>("accordion-1");
  
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center">
              <Layers className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold text-lg">Design System</span>
            </div>
          </SidebarHeader>
          
          <SidebarSection title="Overview">
            <SidebarItem href="#colors" active={activeTab === "colors"} icon={<Palette size={20} />}>
              Colors
            </SidebarItem>
            <SidebarItem href="#badges" active={activeTab === "badges"} icon={<Tag size={20} />}>
              Badges
            </SidebarItem>
            <SidebarItem href="#accordions" active={activeTab === "accordions"} icon={<ChevronDown size={20} />}>
              Accordions
            </SidebarItem>
            <SidebarItem href="#tabs" active={activeTab === "tabs"} icon={<Tabs size={20} />}>
              Tabs
            </SidebarItem>
          </SidebarSection>
          
          <SidebarFooter>
            <SidebarItem href="#settings" icon={<Settings size={20} />}>
              Settings
            </SidebarItem>
          </SidebarFooter>
        </Sidebar>
        
        <main className="flex-1 p-6 overflow-y-auto">
          <header className="mb-8">
            <h1 className="text-display mb-2">Enterprise Design System</h1>
            <p className="text-body-large text-neutral-600 dark:text-neutral-300">
              A comprehensive collection of accessible, responsive UI components
            </p>
          </header>
          
          <TabsRoot>
            <TabsList>
              <TabTrigger 
                value="colors" 
                activeTab={activeTab} 
                onSelect={setActiveTab} 
                icon={<Palette size={16} />}
              >
                Colors
              </TabTrigger>
              <TabTrigger 
                value="badges" 
                activeTab={activeTab} 
                onSelect={setActiveTab} 
                icon={<Tag size={16} />}
              >
                Badges
              </TabTrigger>
              <TabTrigger 
                value="accordions" 
                activeTab={activeTab} 
                onSelect={setActiveTab} 
                icon={<ChevronDown size={16} />}
              >
                Accordions
              </TabTrigger>
              <TabTrigger 
                value="tabs" 
                activeTab={activeTab} 
                onSelect={setActiveTab} 
                icon={<Tabs size={16} />}
              >
                Tabs
              </TabTrigger>
            </TabsList>
            
            {/* Colors Tab Content */}
            <TabContent value="colors" activeTab={activeTab}>
              <ColorSystem />
            </TabContent>
            
            {/* Badges Tab Content */}
            <TabContent value="badges" activeTab={activeTab}>
              <h2 className="text-heading-2 mb-6">Badges</h2>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge label="Default" />
                  <Badge label="Secondary" variant="secondary" />
                  <Badge label="Tertiary" variant="tertiary" />
                  <Badge label="Outline" variant="outline" />
                  <Badge label="Success" variant="success" />
                  <Badge label="Info" variant="info" />
                  <Badge label="Warning" variant="warning" />
                  <Badge label="Error" variant="error" />
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Sizes</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Badge label="Small" size="sm" />
                  <Badge label="Medium" size="md" />
                  <Badge label="Large" size="lg" />
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">With Icons</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge label="Error" variant="error" icon={<CircleX size={14} />} />
                  <Badge label="Success" variant="success" icon={<CircleCheck size={14} />} />
                  <Badge label="Warning" variant="warning" icon={<CircleAlert size={14} />} />
                  <Badge label="Info" variant="info" icon={<CircleInfo size={14} />} />
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Rounded</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge label="Default Rounded" />
                  <Badge label="Fully Rounded" rounded="full" />
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Removable</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge 
                    label="Click to remove" 
                    removable 
                    onRemove={() => alert('Badge would be removed')} 
                  />
                  <Badge 
                    label="Error" 
                    variant="error" 
                    removable 
                    onRemove={() => alert('Error badge would be removed')} 
                  />
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Accessibility Notes</h3>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>All badges have appropriate contrast ratios (WCAG AA compliant)</li>
                  <li>Removable badges can be focused and activated via keyboard</li>
                  <li>ARIA roles and labels are applied appropriately</li>
                  <li>Icons have proper text alternatives via aria-label</li>
                </ul>
              </section>
            </TabContent>
            
            {/* Accordions Tab Content */}
            <TabContent value="accordions" activeTab={activeTab}>
              <h2 className="text-heading-2 mb-6">Accordions</h2>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Default Accordion</h3>
                <Accordion>
                  <AccordionItem
                    id="accordion-1"
                    title="What is an Accordion?"
                    expanded={expandedAccordion === "accordion-1"}
                    onToggle={() => setExpandedAccordion(expandedAccordion === "accordion-1" ? null : "accordion-1")}
                  >
                    <p>
                      An accordion is a vertically stacked set of interactive headings that each reveal a section of content. 
                      They're commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    id="accordion-2"
                    title="How to use the Accordion component"
                    expanded={expandedAccordion === "accordion-2"}
                    onToggle={() => setExpandedAccordion(expandedAccordion === "accordion-2" ? null : "accordion-2")}
                  >
                    <p>
                      Import the Accordion and AccordionItem components from the design system. 
                      Each AccordionItem requires an id, title, expanded state, and an onToggle handler.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    id="accordion-3"
                    title="Accessibility features"
                    expanded={expandedAccordion === "accordion-3"}
                    onToggle={() => setExpandedAccordion(expandedAccordion === "accordion-3" ? null : "accordion-3")}
                  >
                    <p>
                      This accordion implementation follows the WAI-ARIA Accordion Pattern. 
                      It includes appropriate ARIA roles, states, and properties, and is fully keyboard accessible.
                    </p>
                  </AccordionItem>
                </Accordion>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Variants</h3>
                <div className="space-y-4">
                  <AccordionItem
                    id="variant-1"
                    title="Default Variant"
                    variant="default"
                    expanded={true}
                  >
                    <p>This is the default accordion style.</p>
                  </AccordionItem>
                  <AccordionItem
                    id="variant-2"
                    title="Elevated Variant"
                    variant="elevated"
                    expanded={true}
                  >
                    <p>This accordion has an elevated appearance with shadow.</p>
                  </AccordionItem>
                  <AccordionItem
                    id="variant-3"
                    title="Ghost Variant"
                    variant="ghost"
                    expanded={true}
                  >
                    <p>This accordion has a minimal ghost appearance.</p>
                  </AccordionItem>
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">With Icon and Subtitle</h3>
                <Accordion>
                  <AccordionItem
                    id="icon-1"
                    title="User Profile"
                    subtitle="Personal information and settings"
                    icon={<User size={20} />}
                    expanded={expandedAccordion === "icon-1"}
                    onToggle={() => setExpandedAccordion(expandedAccordion === "icon-1" ? null : "icon-1")}
                  >
                    <p>This accordion includes an icon and subtitle to provide additional context.</p>
                  </AccordionItem>
                  <AccordionItem
                    id="icon-2"
                    title="Application Settings"
                    subtitle="Configure application preferences"
                    icon={<Settings size={20} />}
                    expanded={expandedAccordion === "icon-2"}
                    onToggle={() => setExpandedAccordion(expandedAccordion === "icon-2" ? null : "icon-2")}
                  >
                    <p>Customize settings, themes, and notifications here.</p>
                  </AccordionItem>
                </Accordion>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Disabled State</h3>
                <Accordion>
                  <AccordionItem
                    id="disabled-1"
                    title="This section is disabled"
                    disabled
                    expanded={false}
                  >
                    <p>This content won't be accessible because the accordion is disabled.</p>
                  </AccordionItem>
                </Accordion>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Accessibility Notes</h3>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>Built following WAI-ARIA Accordion Pattern</li>
                  <li>Uses appropriate ARIA attributes (aria-expanded, aria-controls, etc.)</li>
                  <li>Focus management for keyboard users</li>
                  <li>Supports screen readers with proper roles and labels</li>
                  <li>Can be operated using keyboard only (Enter/Space to toggle)</li>
                </ul>
              </section>
            </TabContent>
            
            {/* Tabs Tab Content */}
            <TabContent value="tabs" activeTab={activeTab}>
              <h2 className="text-heading-2 mb-6">Tabs</h2>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Tab Variants</h3>
                <div className="space-y-6">
                  <div className="p-4 border border-border rounded-md">
                    <h4 className="text-heading-4 mb-2">Default Tabs</h4>
                    <TabsRoot>
                      <TabsList variant="default">
                        <TabTrigger value="tab1" activeTab="tab1" onSelect={() => {}}>Tab 1</TabTrigger>
                        <TabTrigger value="tab2" activeTab="tab1" onSelect={() => {}}>Tab 2</TabTrigger>
                        <TabTrigger value="tab3" activeTab="tab1" onSelect={() => {}}>Tab 3</TabTrigger>
                      </TabsList>
                    </TabsRoot>
                  </div>
                  
                  <div className="p-4 border border-border rounded-md">
                    <h4 className="text-heading-4 mb-2">Pill Tabs</h4>
                    <TabsRoot>
                      <TabsList variant="pill">
                        <TabTrigger 
                          value="pill1" 
                          activeTab="pill1" 
                          onSelect={() => {}}
                          variant="pill"
                        >
                          Tab 1
                        </TabTrigger>
                        <TabTrigger 
                          value="pill2" 
                          activeTab="pill2" 
                          onSelect={() => {}}
                          variant="pill"
                        >
                          Tab 2
                        </TabTrigger>
                        <TabTrigger 
                          value="pill3" 
                          activeTab="pill1" 
                          onSelect={() => {}}
                          variant="pill"
                        >
                          Tab 3
                        </TabTrigger>
                      </TabsList>
                    </TabsRoot>
                  </div>
                  
                  <div className="p-4 border border-border rounded-md">
                    <h4 className="text-heading-4 mb-2">Underline Tabs</h4>
                    <TabsRoot>
                      <TabsList variant="underline">
                        <TabTrigger 
                          value="underline1" 
                          activeTab="underline1" 
                          onSelect={() => {}}
                          variant="underline"
                        >
                          Tab 1
                        </TabTrigger>
                        <TabTrigger 
                          value="underline2" 
                          activeTab="underline2" 
                          onSelect={() => {}}
                          variant="underline"
                        >
                          Tab 2
                        </TabTrigger>
                        <TabTrigger 
                          value="underline3" 
                          activeTab="underline1" 
                          onSelect={() => {}}
                          variant="underline"
                        >
                          Tab 3
                        </TabTrigger>
                      </TabsList>
                    </TabsRoot>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Tab Sizes</h3>
                <div className="space-y-6">
                  <div className="p-4 border border-border rounded-md">
                    <h4 className="text-heading-4 mb-2">Small Tabs</h4>
                    <TabsRoot>
                      <TabsList size="sm">
                        <TabTrigger value="sm1" activeTab="sm1" onSelect={() => {}} size="sm">Small Tab 1</TabTrigger>
                        <TabTrigger value="sm2" activeTab="sm1" onSelect={() => {}} size="sm">Small Tab 2</TabTrigger>
                      </TabsList>
                    </TabsRoot>
                  </div>
                  
                  <div className="p-4 border border-border rounded-md">
                    <h4 className="text-heading-4 mb-2">Medium Tabs (Default)</h4>
                    <TabsRoot>
                      <TabsList size="md">
                        <TabTrigger value="md1" activeTab="md1" onSelect={() => {}} size="md">Medium Tab 1</TabTrigger>
                        <TabTrigger value="md2" activeTab="md1" onSelect={() => {}} size="md">Medium Tab 2</TabTrigger>
                      </TabsList>
                    </TabsRoot>
                  </div>
                  
                  <div className="p-4 border border-border rounded-md">
                    <h4 className="text-heading-4 mb-2">Large Tabs</h4>
                    <TabsRoot>
                      <TabsList size="lg">
                        <TabTrigger value="lg1" activeTab="lg1" onSelect={() => {}} size="lg">Large Tab 1</TabTrigger>
                        <TabTrigger value="lg2" activeTab="lg1" onSelect={() => {}} size="lg">Large Tab 2</TabTrigger>
                      </TabsList>
                    </TabsRoot>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Tabs with Icons</h3>
                <TabsRoot>
                  <TabsList>
                    <TabTrigger 
                      value="home" 
                      activeTab="home" 
                      onSelect={() => {}}
                      icon={<Home size={16} />}
                    >
                      Home
                    </TabTrigger>
                    <TabTrigger 
                      value="profile" 
                      activeTab="home" 
                      onSelect={() => {}}
                      icon={<User size={16} />}
                    >
                      Profile
                    </TabTrigger>
                    <TabTrigger 
                      value="settings" 
                      activeTab="home" 
                      onSelect={() => {}}
                      icon={<Settings size={16} />}
                    >
                      Settings
                    </TabTrigger>
                  </TabsList>
                </TabsRoot>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Disabled Tab</h3>
                <TabsRoot>
                  <TabsList>
                    <TabTrigger value="enabled" activeTab="enabled" onSelect={() => {}}>Enabled</TabTrigger>
                    <TabTrigger value="disabled" activeTab="enabled" onSelect={() => {}} disabled>Disabled</TabTrigger>
                  </TabsList>
                </TabsRoot>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Vertical Tabs</h3>
                <TabsRoot orientation="vertical">
                  <div className="flex gap-4">
                    <TabsList orientation="vertical" className="w-48">
                      <TabTrigger value="v1" activeTab="v1" onSelect={() => {}}>Vertical Tab 1</TabTrigger>
                      <TabTrigger value="v2" activeTab="v1" onSelect={() => {}}>Vertical Tab 2</TabTrigger>
                      <TabTrigger value="v3" activeTab="v1" onSelect={() => {}}>Vertical Tab 3</TabTrigger>
                    </TabsList>
                    <div className="p-4 border border-border rounded-md flex-1">
                      Content area for vertical tabs
                    </div>
                  </div>
                </TabsRoot>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Full Width Tabs</h3>
                <TabsRoot>
                  <TabsList fullWidth>
                    <TabTrigger value="fw1" activeTab="fw1" onSelect={() => {}}>Tab 1</TabTrigger>
                    <TabTrigger value="fw2" activeTab="fw1" onSelect={() => {}}>Tab 2</TabTrigger>
                    <TabTrigger value="fw3" activeTab="fw1" onSelect={() => {}}>Tab 3</TabTrigger>
                  </TabsList>
                </TabsRoot>
              </section>
              
              <section className="mb-8">
                <h3 className="text-heading-3 mb-4">Accessibility Notes</h3>
                <ul className="list-disc pl-6 space-y-2 text-body">
                  <li>Uses appropriate ARIA role attributes (tablist, tab, tabpanel)</li>
                  <li>Proper keyboard navigation (arrow keys, Tab key)</li>
                  <li>Focus management for tab selection</li>
                  <li>Tab/tabpanel relationship established with aria-controls and aria-labelledby</li>
                  <li>Active tab state indicated with aria-selected</li>
                  <li>Color contrast meets WCAG AA requirements</li>
                </ul>
              </section>
            </TabContent>
          </TabsRoot>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
