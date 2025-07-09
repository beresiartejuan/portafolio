import { useState, useCallback } from 'react';
import { Mail, MapPin, Linkedin, Github, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ContactForm, { ContactFormData } from './ContactForm';

const ContactSection = () => {
  const { toast } = useToast();
  const [showProjectModal, setShowProjectModal] = useState(false);

  // Handle project inquiry modal form submission
  const handleProjectInquirySubmit = useCallback((_formData: ContactFormData) => {
    toast({
      title: "Propuesta enviada",
      description: "Gracias por tu interés. Te responderé en 1-2 días hábiles.",
    });
    setShowProjectModal(false);
  }, [toast]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv_juan_beresiarte.pdf';
    link.download = 'cv_juan_beresiarte.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Contacto</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">¡Hablemos!</h3>
            <p className="text-muted-foreground mb-8">
              Estoy abierto a oportunidades de freelance, colaboraciones en proyectos interesantes o simplemente charlar sobre tecnología. No dudes en contactarme.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">juan@ejemplo.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Ubicación</h4>
                  <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setShowProjectModal(true)}
                  className="bg-primary/10 hover:bg-primary/20 text-primary"
                >
                  ¿Necesitas un freelancer? Hablemos →
                </Button>

                <Button
                  onClick={handleDownloadCV}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <FileText size={16} />
                  Descargar CV
                </Button>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/juanberesiarte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/juanberesiarte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card p-6 rounded-lg border border-border">
              <ContactForm
                showSubject={true}
                formspreeKey="xyzeqker"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Inquiry Modal */}
      <Dialog open={showProjectModal} onOpenChange={setShowProjectModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Nuevo Proyecto</DialogTitle>
            <DialogDescription>
              Cuéntame sobre tu proyecto. Te responderé en 1-2 días hábiles.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ContactForm
              showSubject={false}
              onSubmit={handleProjectInquirySubmit}
              submitButtonText="Enviar Propuesta"
              formspreeKey="xyzeqker"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
