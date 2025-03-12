import { Mail, MapPin, Phone } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

// Initialize EmailJS with public key
emailjs.init({
  publicKey: 'g8wSQG1Kf1oCZJidJ',
  limitRate: {
    throttle: 2000,
  }
});

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      
      const templateParams = {
        from_name: formRef.current.from_name.value,
        from_email: formRef.current.from_email.value,
        message: formRef.current.message.value,
        to_name: 'Mateo',
      };

      const result = await emailjs.send(
        'service_4m2a3pv',
        '__ejs-test-mail-service__',
        templateParams,
        'g8wSQG1Kf1oCZJidJ'
      );
      
      if (result.status === 200) {
        toast.success('¡Mensaje enviado con éxito!');
        formRef.current.reset();
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent border-b-4">
            Contáctame
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Correo</h3>
                  <p className="text-gray-400">mateogalvez123321@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-gray-400">+54 2923-414359</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-gray-400">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Nombre"
                required
                className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="correo@ejemplo.com"
                required
                className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Tu mensaje"
                required
                className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
