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

import { 
  Home, 
  Palette, 
  Tag, 
  ChevronDown, 
  Layers, 
  Info,
  CircleX, 
  CircleCheck, 
  CircleAlert, 
  Settings, 
  User,
  LayoutGrid
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("colors");
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
            <SidebarItem href="#tabs" active={activeTab === "tabs"} icon={<LayoutGrid size={20} />}>
              Tabs
            </SidebarItem>
          </SidebarSection>
          
          <SidebarFooter>
            <SidebarItem href="#settings" icon={<Settings size={20} />}>
              Settings
            </SidebarItem>
          </SidebarFooter>
        </Sidebar>
        
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <header className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-display mb-2">Enterprise Design System</h1>
            <p className="text-body md:text-body-large text-neutral-600 dark:text-neutral-300">
              A comprehensive collection of accessible, responsive UI components
            </p>
          </header>
          
          <div className="space-y-4">
            <TabsRoot>
              <TabsList className="overflow-x-auto flex-nowrap">
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
                  icon={<LayoutGrid size={16} />}
                >
                  Tabs
                </TabTrigger>
              </TabsList>
              
              <TabContent value="colors" activeTab={activeTab}>
                <ColorSystem />
              </TabContent>
              
              <TabContent value="badges" activeTab={activeTab}>
                <div className="space-y-6">
                  <section>
                    <h2 className="text-xl md:text-heading-2 mb-4 md:mb-6">Badges</h2>
                    
                    <section className="space-y-6 md:space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-lg md:text-heading-3 mb-4">Variants</h3>
                        <div className="flex flex-wrap gap-2 md:gap-4">
                          <Badge label="Default" />
                          <Badge label="Secondary" variant="secondary" />
                          <Badge label="Tertiary" variant="tertiary" />
                          <Badge label="Outline" variant="outline" />
                          <Badge label="Success" variant="success" />
                          <Badge label="Info" variant="info" />
                          <Badge label="Warning" variant="warning" />
                          <Badge label="Error" variant="error" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg md:text-heading-3 mb-4">With Icons</h3>
                        <div className="flex flex-wrap gap-2 md:gap-4">
                          <Badge label="Error" variant="error" icon={<CircleX size={14} />} />
                          <Badge label="Success" variant="success" icon={<CircleCheck size={14} />} />
                          <Badge label="Warning" variant="warning" icon={<CircleAlert size={14} />} />
                          <Badge label="Info" variant="info" icon={<Info size={14} />} />
                        </div>
                      </div>
                    </section>
                  </section>
                </div>
              </TabContent>
              
              <TabContent value="accordions" activeTab={activeTab}>
                <div className="space-y-6">
                  <h2 className="text-xl md:text-heading-2 mb-4 md:mb-6">Accordions</h2>
                  
                  <section className="space-y-6 md:space-y-8">
                    <div>
                      <h3 className="text-lg md:text-heading-3 mb-4">Default Accordion</h3>
                      <Accordion>
                        <AccordionItem
                          id="accordion-1"
                          title="What is an Accordion?"
                          expanded={expandedAccordion === "accordion-1"}
                          onToggle={() => setExpandedAccordion(expandedAccordion === "accordion-1" ? null : "accordion-1")}
                        >
                          <p className="text-sm md:text-base">
                            An accordion is a vertically stacked set of interactive headings that each reveal a section of content.
                          </p>
                        </AccordionItem>
                        
                        <AccordionItem
                          id="accordion-2"
                          title="When to use Accordions?"
                          expanded={expandedAccordion === "accordion-2"}
                          onToggle={() => setExpandedAccordion(expandedAccordion === "accordion-2" ? null : "accordion-2")}
                        >
                          <p className="text-sm md:text-base">
                            Use accordions to organize related content into collapsible sections, making it easier for users to find specific information.
                          </p>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </section>
                </div>
              </TabContent>
              
              <TabContent value="tabs" activeTab={activeTab}>
                <div className="space-y-6">
                  <h2 className="text-xl md:text-heading-2 mb-4 md:mb-6">Tabs</h2>
                  
                  <section className="space-y-6 md:space-y-8">
                    <div>
                      <h3 className="text-lg md:text-heading-3 mb-4">Tab Variants</h3>
                      <div className="space-y-4 md:space-y-6">
                        <TabsRoot>
                          <TabsList>
                            <TabTrigger value="tab1" activeTab="tab1" onSelect={() => {}}>
                              Tab 1
                            </TabTrigger>
                            <TabTrigger value="tab2" activeTab="tab1" onSelect={() => {}}>
                              Tab 2
                            </TabTrigger>
                            <TabTrigger value="tab3" activeTab="tab1" onSelect={() => {}}>
                              Tab 3
                            </TabTrigger>
                          </TabsList>
                        </TabsRoot>
                      </div>
                    </div>
                  </section>
                </div>
              </TabContent>
            </TabsRoot>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
