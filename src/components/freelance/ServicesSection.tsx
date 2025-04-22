
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Layout, FileText, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 text-primary mb-4" />,
    title: "Desarrollo Web Full Stack",
    description: "Aplicaciones web modernas con React y Node.js, optimizadas para rendimiento y experiencia de usuario."
  },
  {
    icon: <Layout className="w-10 h-10 text-primary mb-4" />,
    title: "Landing Pages",
    description: "Páginas de aterrizaje atractivas y convertidoras, diseñadas para captar leads y ventas."
  },
  {
    icon: <FileText className="w-10 h-10 text-primary mb-4" />,
    title: "Diseño de APIs",
    description: "APIs REST robustas y escalables, documentadas y listas para integrar con cualquier frontend."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary mb-4" />,
    title: "Autenticación y Seguridad",
    description: "Implementación de sistemas seguros de autenticación y autorización."
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
