export default function OurWorks() {
    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-4">Наши работы</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Примеры работ — можно позже заменить на динамические данные */}
                <WorkCard
                    title="Проект 1"
                    description="Краткое описание проекта 1"
                    imageUrl="https://img.freepik.com/free-vector/paper-style-core-values-background_23-2149079276.jpg?t=st=1746804473~exp=1746808073~hmac=3c15a61f1c3c17538b4a3c147cc7fb878c17c6b669160321220846ba270f9098&w=1380"
                />
                <WorkCard
                    title="Проект 2"
                    description="Краткое описание проекта 2"
                    imageUrl="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?t=st=1746804494~exp=1746808094~hmac=c5e92aec3c96dde20023aa85b222e70a6bcc509c0bd9ae2681b9d46a191dcda6&w=1380"
                />
                <WorkCard
                    title="Проект 3"
                    description="Краткое описание проекта 3"
                    imageUrl="https://img.freepik.com/free-vector/collab-concept-illustration_114360-3960.jpg?t=st=1746804536~exp=1746808136~hmac=f84c256cf8de06bcf61f7a8d9b3f0db7941c414b57d42a7560321cd7c924ffbc&w=826"
                />
            </section>
        </main>
    );
}

function WorkCard({ title, description, imageUrl }) {
    return (
        <div className="rounded-2xl shadow-md overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}
