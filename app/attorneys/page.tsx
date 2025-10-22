import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function AttorneysPage() {
  return (
    <div>
      <PageHeader
        title="Our Attorneys"
        description="Meet our experienced team of legal professionals serving clients across Nepal with integrity and dedication."
      />

      <div className="container mx-auto px-4 py-16">
        <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-muted-foreground">
          Our legal team consists of highly qualified lawyers with experience in corporate, civil, and constitutional
          law. Based in Kathmandu, we are committed to providing trusted legal guidance and representation across Nepal.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AttorneyCard
            name="Adv. Suman Adhikari"
            title="Founding Partner"
            image="/images/attorney-2.jpg"
            specialties={["Corporate Law", "Constitutional Law"]}
            education={[
              "LL.M., Tribhuvan University, Kathmandu",
              "B.A., Nepal Law Campus",
            ]}
            barAdmissions={["Nepal Bar Council", "Supreme Court Bar Association"]}
            bio="Advocate Suman Adhikari has over 20 years of experience in corporate and constitutional law. He has represented leading business groups and NGOs in major legal proceedings and policy consultations across Nepal."
            email="suman@nepalilawfirm.com"
            phone="+977 9841234567"
          />

          <AttorneyCard
            name="Adv. Rachana Shrestha"
            title="Managing Partner"
            image="/images/attorney-2.jpg"
            specialties={["Family Law", "Property Disputes"]}
            education={[
              "LL.B., Kathmandu School of Law",
              "Diploma in Mediation, Nepal Bar Association",
            ]}
            barAdmissions={[
              "Nepal Bar Council",
              "Kathmandu District Bar Association",
            ]}
            bio="Rachana Shrestha specializes in family and property law, helping families resolve complex inheritance and divorce matters with compassion and professionalism. She is also a certified mediator with extensive courtroom experience."
            email="rachana@nepalilawfirm.com"
            phone="+977 9812345678"
          />

          <AttorneyCard
            name="Adv. Bishal Thapa"
            title="Senior Associate"
            image="/images/attorney-2.jpg"
            specialties={["Criminal Defense", "Civil Litigation"]}
            education={[
              "LL.B., Tribhuvan University",
              "B.A., Patan Multiple Campus",
            ]}
            barAdmissions={[
              "Nepal Bar Council",
              "High Court Bar Association, Patan",
            ]}
            bio="Bishal Thapa has successfully defended clients in high-profile criminal and civil cases. Known for his strategic argumentation and dedication, Bishal has earned a strong reputation for achieving fair justice."
            email="bishal@nepalilawfirm.com"
            phone="+977 9823456789"
          />

          <AttorneyCard
            name="Adv. Nisha Gurung"
            title="Associate Partner"
            image="/images/attorney-2.jpg"
            specialties={["Immigration Law", "Labor Law"]}
            education={[
              "LL.M., Purbanchal University",
              "LL.B., Kathmandu School of Law",
            ]}
            barAdmissions={["Nepal Bar Council", "Lalitpur Bar Association"]}
            bio="Nisha Gurung specializes in immigration and labor law, assisting Nepali migrant workers and international clients in legal compliance, visa issues, and employment disputes. She is fluent in Nepali, English, and Hindi."
            email="nisha@nepalilawfirm.com"
            phone="+977 9845678910"
          />

          <AttorneyCard
            name="Adv. Prakash Rana"
            title="Partner"
            image="/images/attorney-2.jpg"
            specialties={["Commercial Law", "Real Estate Law"]}
            education={[
              "LL.M., Tribhuvan University",
              "B.Com., Shanker Dev Campus",
            ]}
            barAdmissions={["Nepal Bar Council", "Supreme Court Bar Association"]}
            bio="Prakash Rana has deep expertise in commercial transactions, contract drafting, and real estate disputes. His pragmatic approach has helped businesses and investors navigate Nepal’s evolving business environment."
            email="prakash@nepalilawfirm.com"
            phone="+977 9851234567"
          />

          <AttorneyCard
            name="Adv. Anjana Koirala"
            title="Junior Associate"
            image="/images/attorney-2.jpg"
            specialties={["Environmental Law", "Human Rights"]}
            education={[
              "LL.B., Kathmandu University School of Law",
              "B.A., Tribhuvan University",
            ]}
            barAdmissions={["Nepal Bar Council"]}
            bio="Anjana Koirala is passionate about environmental protection and human rights advocacy. She provides legal research and drafting support in public interest cases and contributes to awareness campaigns on legal literacy in rural Nepal."
            email="anjana@nepalilawfirm.com"
            phone="+977 9845012345"
          />
        </div>
      </div>
    </div>
  )
}

function AttorneyCard({
  name,
  title,
  image,
  specialties,
  education,
  barAdmissions,
  bio,
  email,
  phone,
}: {
  name: string
  title: string
  image: string
  specialties: string[]
  education: string[]
  barAdmissions: string[]
  bio: string
  email: string
  phone: string
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-md">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-lg bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Portrait of ${name}, ${title}`}
          fill
          className="object-cover object-top transition-transform duration-500 hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-1 text-2xl font-bold">{name}</h2>
        <p className="mb-4 text-primary">{title}</p>

        <p className="mb-4 text-muted-foreground">{bio}</p>

        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold">Areas of Practice</h3>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span key={index} className="rounded-full bg-muted px-3 py-1 text-sm">
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold">Education</h3>
          <ul className="list-inside list-disc text-muted-foreground">
            {education.map((degree, index) => (
              <li key={index}>{degree}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold">Bar Admissions</h3>
          <ul className="list-inside list-disc text-muted-foreground">
            {barAdmissions.map((admission, index) => (
              <li key={index}>{admission}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <h3 className="mb-2 text-lg font-semibold">Contact Information</h3>
          <div className="flex flex-col space-y-2 text-muted-foreground">
            <a href={`mailto:${email}`} className="flex items-center hover:text-primary">
              <Mail className="mr-2 h-4 w-4" /> {email}
            </a>
            <a href={`tel:${phone}`} className="flex items-center hover:text-primary">
              <Phone className="mr-2 h-4 w-4" /> {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
