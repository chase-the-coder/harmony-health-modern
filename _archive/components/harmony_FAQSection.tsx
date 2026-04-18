type Faq = { question: string; answer: string };

export default function FAQSection({
  title = "Frequently Asked Questions",
  eyebrow = "Harmony Health",
  faqs,
}: {
  title?: string;
  eyebrow?: string;
  faqs: Faq[];
}) {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          {eyebrow && <p className="hh-eyebrow mb-3">{eyebrow}</p>}
          <h2 className="hh-h2">{title}</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="collapse collapse-plus bg-base-100 border border-base-300"
            >
              <summary className="collapse-title text-lg font-semibold cursor-pointer">
                {faq.question}
              </summary>
              <div className="collapse-content">
                <p className="text-base-content/80 leading-relaxed whitespace-pre-wrap">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
