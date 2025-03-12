import React, { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      
      await emailjs.sendForm(
        'service_4m2a3pv',
        'template_rztek2b',
        form.current,
        'g8wSQG1Kf1oCZJidJ'
      );

      toast.success('¡Mensaje enviado con éxito!');
      form.current.reset();
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black/45 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-500">
          Contáctame
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-semibold">Correo</h3>
                <p className="text-gray-400">mateogalvez123321@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-gray-400">+54 2923-414359</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-semibold">Ubicación</h3>
                <p className="text-gray-400">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Nombre"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                name="user_email"
                placeholder="correo@ejemplo.com"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows={6}
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;