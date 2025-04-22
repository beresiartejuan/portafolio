
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Layout, Globe, Database, Code, LayoutDashboard, Layers, Check, Mail } from 'lucide-react';

const pricingPlans = [
  {
    title: "Landing Básica",
    description: "Landing page de una sola sección, perfecta para presentar tu producto o servicio de manera efectiva.",
    price: "Desde $800 USD",
    features: [
      "Diseño responsive",
      "Animaciones suaves",
      "Una sección principal",
      "Optimización de rendimiento"
    ],
    icon: <Layout className="w-8 h-8 text-primary mb-2" />
  },
  {
    title: "Landing Avanzada + Formulario",
    description: "Landing page completa con múltiples secciones y formulario de contacto funcional.",
    price: "Desde $1500 USD",
    features: [
      "Hasta 4 secciones",
      "Formulario funcional",
      "Optimización SEO básica",
      "Analytics integrado"
    ],
    icon: <Globe className="w-8 h-8 text-primary mb-2" />
  },
  {
    title: "API REST Personalizada",
    description: "Backend robusto y escalable con Node.js, ideal para startups y aplicaciones web.",
    price: "Desde $2000 USD",
    features: [
      "CRUD completo",
      "Validación con Zod",
      "Conexión a base de datos",
      "Documentación detallada"
    ],
    icon: <Database className="w-8 h-8 text-primary mb-2" />
  },
  {
    title: "Sitio Web Fullstack Básico",
    description: "Solución completa con frontend en React y backend en Node.js + Express.",
    price: "Desde $3000 USD",
    features: [
      "Registro y login",
      "Panel de usuario",
      "Base de datos",
      "Diseño responsive"
    ],
    icon: <Code className="w-8 h-8 text-primary mb-2" />
  },
  {
    title: "Dashboard Personalizado",
    description: "Panel de administración moderno con estadísticas y gestión de datos.",
    price: "Desde $4000 USD",
    features: [
      "Estadísticas en tiempo real",
      "Gestión de usuarios",
      "Carga de archivos",
      "Diseño personalizado"
    ],
    icon: <LayoutDashboard className="w-8 h-8 text-primary mb-2" />
  },
  {
    title: "Web Especializada",
    description: "Desarrollo a medida para proyectos que requieren funcionalidades únicas.",
    price: "Desde $5000 USD",
    features: [
      "Arquitectura escalable",
      "APIs personalizadas",
      "Integración con servicios",
      "Soporte premium"
    ],
    icon: <Layers className="w-8 h-8 text-primary mb-2" />
  }
];

export const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Planes de Servicio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center">
                  {plan.icon}
                </div>
                <CardTitle className="text-xl mb-2 text-center">{plan.title}</CardTitle>
                <CardDescription className="text-center">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary text-center mb-4">{plan.price}</p>
                <ul className="space-y-3 text-muted-foreground">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">
                  Solicitar información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button size="lg" variant="secondary" className="hover:bg-primary hover:text-primary-foreground">
            <Mail className="mr-2" /> ¿No sabés cuál elegir? Hablemos
          </Button>
        </div>
      </div>
    </section>
  );
};
