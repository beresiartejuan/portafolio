
import { useState, useCallback } from 'react';
import { Mail, MapPin, Linkedin, Github, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Reveal from './Reveal';
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">¡Hablemos!</h2>

        <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-2">
          <div className="space-y-8">
            <p className="text-foreground/85 leading-relaxed text-lg">
                Estoy abierto a oportunidades de freelance, colaboraciones en proyectos interesantes o simplemente charlar sobre tecnología.
              </p>

            <div className="space-y-4">
              <a
                href="mailto:juanberesiarte@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">juanberesiarte@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <span className="text-sm">Mendoza, Argentina</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setShowProjectModal(true)}
                variant="outline"
                className="text-sm"
              >
                ¿Necesitas un freelancer?
              </Button>

              <Button
                onClick={handleDownloadCV}
                variant="ghost"
                className="flex items-center gap-2 text-sm"
              >
                <FileText size={16} />
                Descargar CV
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/juanberesiarte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/juanberesiarte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <ContactForm
              showSubject={true}
              formspreeKey="xyzeqker"
            />
          </div>
        </div>
        </Reveal>
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
