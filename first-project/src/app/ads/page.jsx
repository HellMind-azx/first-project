// app/advertising/page.jsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components2/ui/card";
import { Button } from "@/app/components2/ui/button";
import { Star, Target, TrendingUp } from "lucide-react";

export default function AdvertisingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Реклама на нашей платформе
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Привлекайте свою аудиторию на платформе, которой доверяют тысячи пользователей.
        </p>
        <Button size="lg">Связаться с нами</Button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    icon: Target,
    title: "Точная аудитория",
    description: "Ваше объявление увидят те, кто действительно заинтересован.",
  },
  {
    icon: TrendingUp,
    title: "Максимальный охват",
    description: "Мы поможем вам выйти на новый уровень узнаваемости бренда.",
  },
  {
    icon: Star,
    title: "Премиум формат",
    description: "Выделяйтесь с профессиональной подачей и нативной интеграцией.",
  },
];
