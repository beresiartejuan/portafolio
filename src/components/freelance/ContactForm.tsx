
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    projectDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud enviada",
      description: "Me pondré en contacto contigo lo antes posible para discutir tu proyecto.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      timeline: '',
      projectDetails: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Cuéntame sobre tu proyecto</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-background/50 backdrop-blur"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-background/50 backdrop-blur"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">Empresa (opcional)</label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="bg-background/50 backdrop-blur"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2">Presupuesto estimado (USD)</label>
            <Input
              id="budget"
              name="budget"
              type="text"
              value={formData.budget}
              onChange={handleChange}
              className="bg-background/50 backdrop-blur"
              required
              placeholder="ej. $2000-$5000"
            />
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium mb-2">Plazo estimado</label>
            <Input
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="bg-background/50 backdrop-blur"
              required
              placeholder="ej. 2-3 meses"
            />
          </div>

          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium mb-2">Detalles del proyecto</label>
            <Textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              className="bg-background/50 backdrop-blur"
              required
              rows={6}
              placeholder="Describe tu proyecto, objetivos y requerimientos específicos"
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            <Calendar className="mr-2" /> Enviar solicitud
          </Button>
        </form>
      </div>
    </section>
  );
};
