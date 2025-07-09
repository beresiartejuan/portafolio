import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  /** Whether to show the subject field */
  showSubject?: boolean;
  /** Callback when form is submitted */
  onSubmit?: (formData: ContactFormData) => void;
  /** Custom submit button text */
  submitButtonText?: string;
  /** Additional CSS classes for the form container */
  className?: string;
  /** Formspree form key */
  formspreeKey?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string; // Will be "Trabajo freelance" when showSubject is false
  message: string;
}

const ContactForm = ({ 
  showSubject = true, 
  onSubmit,
  submitButtonText = "Enviar mensaje",
  className = "",
  formspreeKey = "YOUR_FORMSPREE_KEY"
}: ContactFormProps) => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm(formspreeKey);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: showSubject ? '' : 'Trabajo freelance', // Default subject when hidden
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle successful submission with useEffect to avoid infinite re-renders
  useEffect(() => {
    if (state.succeeded) {
      // If onSubmit callback is provided, use it (for custom handling like modal close)
      if (onSubmit) {
        onSubmit(formData);
      } else {
        // Default behavior: show toast
        toast({
          title: showSubject ? "Mensaje enviado" : "Propuesta enviada",
          description: showSubject 
            ? "Gracias por tu mensaje. Te responderé lo antes posible."
            : "Gracias por tu interés. Te responderé en 1-2 días hábiles.",
        });
      }
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: showSubject ? '' : 'Trabajo freelance',
        message: ''
      });
    }
  }, [state.succeeded, onSubmit, showSubject]);

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      
      {/* Conditionally render subject field */}
      {showSubject && (
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">Asunto</label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          <ValidationError 
            prefix="Subject" 
            field="subject"
            errors={state.errors}
          />
        </div>
      )}
      
      {/* Hidden subject field when not showing subject input */}
      {!showSubject && (
        <input
          type="hidden"
          name="subject"
          value="Trabajo freelance"
        />
      )}
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {showSubject ? "Mensaje" : "Detalles del Proyecto"}
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder={showSubject ? undefined : "Describe tu proyecto, objetivos y requerimientos"}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      
      <Button type="submit" disabled={state.submitting} className="w-full">
        {state.submitting ? (
          <span className="flex items-center justify-center">
            Enviando...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            {submitButtonText}
            <Send size={16} className="ml-2" />
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
