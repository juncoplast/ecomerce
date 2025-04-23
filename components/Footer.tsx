"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <div>
      <motion.footer
        className="bg-gray-200 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 py-4 mt-16"
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-1">
          {/* Endereço */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Endereço</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Rua Maria Almeida, 810, Coaçu, Fortaleza - CE <br />
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contato</h4>
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-1">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
              <a href="tel:+5585989569856" className="hover:underline">
                (85) 98956-9856 (Vendas Fábrica)
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-1">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
              <a href="tel:+5585996785858" className="hover:underline">
                (85) 99678-5858 (Orçamento Virtual)
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-1">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
              <a href="tel:+5585997183029" className="hover:underline">
                (85) 99718-3029 (Atendimento)
              </a>
            </div>

            <p className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mt-4 mb-1">
              <img src="/email.png" alt="Email" className="w-4 h-4" />
              <a href="mailto:juncoplast_vendas@gmail.com.br" className="hover:underline">
                juncoplast_vendas@gmail.com.br
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-300 dark:border-zinc-700 pt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} por{" "}
          <Link
            href="https://mareanalitica.com.br"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maré Analítica
          </Link>. Todos os direitos reservados.
        </div>
      </motion.footer>
    </div>
  );
}
