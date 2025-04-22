
import React from 'react';
import { Mail, MapPin, Send, Linkedin, Github, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ProjectInquiryModal from './ProjectInquiryModal';

const ContactSection = () => {
  const { toast } = useToast();
  const [showProjectModal, setShowProjectModal] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por tu mensaje. Te responderé lo antes posible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

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
          
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg border border-border">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Enviar mensaje
                      <Send size={16} className="ml-2" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ProjectInquiryModal 
        isOpen={showProjectModal}
        onClose={() => setShowProjectModal(false)}
      />
    </section>
  );
};

export default ContactSection;
