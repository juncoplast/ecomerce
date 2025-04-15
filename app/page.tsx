"use client";

import { Button } from "@/components/ui/button";
import {
  Factory,
  Award,
  Leaf,
  Settings,
  Users,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <main className="flex flex-col w-full bg-background">
      <section
        id="empresa"
        className="mt-[25vh] py-20 px-6 md:px-20 max-w-screen-2xl mx-auto"
      >
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div className="md:w-1/2" variants={fadeIn}>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Sobre a Juncoplast
            </h2>
            <p className="text-base md:text-lg text-foreground/80 mb-6">
              Fundada em 2010, a{" "}
              <strong className="text-primary">Juncoplast</strong> se destaca
              como referência nacional na fabricação de{" "}
              <strong>fibras sintéticas de alta qualidade</strong>, voltadas
              especialmente para o setor moveleiro e de decoração.
            </p>
            <p className="text-base md:text-lg text-foreground/80 mb-6">
              Com sede em Fortaleza (CE) e filial em Gravata (PE), atuamos
              dentro do setor de <em>Indústrias da Transformação</em> e contamos
              com uma equipe entre 21 e 50 colaboradores altamente capacitados.
            </p>
            <p className="text-base md:text-lg text-foreground/80">
              Desenvolvemos{" "}
              <strong className="text-primary">
                fibras sintéticas com aditivo Anti-UV
              </strong>
              , resistentes às intempéries, fáceis de limpar, com alto poder de
              respiro, oferecendo conforto térmico e durabilidade excepcional.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="mt-8 border-primary text-primary hover:bg-primary/5"
              >
                Conheça Nossa História <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={fadeIn}
          >
            <div
              className="w-full max-w-xs relative rounded-3xl overflow-hidden shadow-xl"
              style={{ aspectRatio: "9/16" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
              <video
                src="./video_fabricacao.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                playsInline
              ></video>
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <span className="text-primary text-xs font-bold">HD</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="bg-accent py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.span
              className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              DIFERENCIAIS
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher a Juncoplast?
            </h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Descubra o que faz da Juncoplast uma referência no mercado de
              fibras sintéticas para o setor moveleiro
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-card rounded-lg shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6 group-hover:bg-primary/20 transition-all">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Produção de Excelência
                </h3>
                <p className="text-foreground/70">
                  Utilizamos matéria-prima 100% virgem e processos rigorosos
                  para garantir fibras sintéticas de alta qualidade e
                  durabilidade.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-card rounded-lg shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6 group-hover:bg-primary/20 transition-all">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Tecnologia Anti-UV
                </h3>
                <p className="text-foreground/70">
                  Nossas fibras sintéticas contam com aditivo Anti-UV,
                  garantindo resistência às intempéries e maior durabilidade em
                  ambientes externos.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-card rounded-lg shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6 group-hover:bg-primary/20 transition-all">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Personalização Completa
                </h3>
                <p className="text-foreground/70">
                  Desenvolvemos soluções sob medida conforme suas necessidades
                  específicas – seja em cores, densidade ou textura.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="bg-card rounded-lg shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6 group-hover:bg-primary/20 transition-all">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Equipe Especializada
                </h3>
                <p className="text-foreground/70">
                  Contamos com profissionais altamente capacitados,
                  comprometidos com a inovação e excelência em cada etapa do
                  processo.
                </p>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="bg-card rounded-lg shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6 group-hover:bg-primary/20 transition-all">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Certificação Técnica
                </h3>
                <p className="text-foreground/70">
                  Fornecemos laudos técnicos completos dos nossos produtos,
                  garantindo a qualidade e confiabilidade que o seu negócio
                  merece.
                </p>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              className="bg-card rounded-lg shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6 group-hover:bg-primary/20 transition-all">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Inovação Constante
                </h3>
                <p className="text-foreground/70">
                  Investimos continuamente em pesquisa e desenvolvimento para
                  oferecer produtos cada vez mais modernos e eficientes.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Conheça Nossos Produtos
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Estatísticas */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-gradient-to-r from-primary to-primary/80 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center" variants={statsVariants}>
              <motion.div
                className="text-5xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                14+
              </motion.div>
              <div className="text-lg font-medium text-white/90">
                Anos de experiência
              </div>
            </motion.div>
            <motion.div className="text-center" variants={statsVariants}>
              <motion.div
                className="text-5xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                50+
              </motion.div>
              <div className="text-lg font-medium text-white/90">
                Colaboradores
              </div>
            </motion.div>
            <motion.div className="text-center" variants={statsVariants}>
              <motion.div
                className="text-5xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                200+
              </motion.div>
              <div className="text-lg font-medium text-white/90">
                Clientes satisfeitos
              </div>
            </motion.div>
            <motion.div className="text-center" variants={statsVariants}>
              <motion.div
                className="text-5xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
              >
                2
              </motion.div>
              <div className="text-lg font-medium text-white/90">
                Unidades no Brasil
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Final */}
      <motion.section
        className="py-20 px-6 md:px-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pronto para elevar a qualidade dos seus produtos?
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80 mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Fale direto com a fábrica e descubra por que somos uma das marcas
            mais confiáveis em fibra sintética no Brasil.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Fale com um Especialista
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
