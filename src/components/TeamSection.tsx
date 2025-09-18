import { Facebook, Instagram, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import team profile images
import johnAstleyImg from '@/assets/images/team/asli.jpg';
import kennedyAbadImg from '@/assets/images/team/Kensub.jpg';
import jabyMaeImg from '@/assets/images/team/Adorna.jpeg';
import fernandoLacsonImg from '@/assets/images/team/fernando.jpg';
import kenjiVargasImg from '@/assets/images/team/kenji.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Acer, John Astley A.",
      role: "Project Manager",
      avatar: "JA",
      image: johnAstleyImg,
      bio: "Kapag may tinanim, May aanihin.",
      skills: ["Leadership", "Public Speaking Skill", "Communication Skill"],
      social: {
      facebook: "https://www.facebook.com/JohnAstleyAcer",
      mail: "johnastleyacer@gmail.com",
      instagram: "https://www.instagram.com/johnastleyacer/"
      }
    },
    {
      name: "Abad, Kennedy A.",
      role: "Full Stack Developer",
      avatar: "KA",
      image: kennedyAbadImg,
      bio: "Utak ng Katipunan",
      skills: ["Siya na FrontEnd", "Pati Backend", "Pati Design"],
      social: {
      facebook: "https://www.facebook.com/abad.ken.94",
      mail: "Sphken23@gmail.com"
      }
    },
    {
      name: "Adorna, Jaby Mae A.",
      role: "System Analyst",
      avatar: "JM",
      image: jabyMaeImg,
      bio: "Creating intuitive interfaces that enhance healthcare professional workflows.",
      skills: ["UI/UX Design", "Frontend Development", "User Research"],
      social: {
      facebook: "https://www.facebook.com/jbmae.adorna",
      mail: "jabymaeadorna09@gmail.com"
      }
    },
    {
      name: "Lacson, Fernando J.",
      role: "User Training Lead",
      avatar: "FJ",
      image: fernandoLacsonImg,
      bio: "Lika turuan kita pano gamitin tong system.",
      skills: ["Taga Bayad Print", "System Administration", "Late na pumasok"],
      social: {
      facebook: "https://www.facebook.com/aldrin.lacson.17",
      mail: "aldrinlacson17@gmail.com"
      }
    },
    {
      name: "Vargas, Kenji B.",
      role: "Quality Assurance Specialist",
      avatar: "KB",
      image: kenjiVargasImg,
      bio: "Maintaining the highest standards of quality and reliability in healthcare systems.",
      skills: ["Quality Assurance", "Testing", "Process Optimization"],
      social: {
      facebook: "https://www.facebook.com/KBV29",
      mail: "kenjivargas.29@gmail.com"
      }
    },
  ];

  const colors = [
    'bg-gradient-to-br from-primary to-primary-hover',
    'bg-gradient-to-br from-accent to-success',
    'bg-gradient-to-br from-success to-accent',
    'bg-gradient-to-br from-primary to-accent',
    'bg-gradient-to-br from-accent to-primary',
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Development Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated group of healthcare technology specialists committed to revolutionizing patient care through innovative solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="team-card group relative overflow-hidden border-0 shadow-soft hover:shadow-strong transition-smooth bg-card"
            >
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-medium border-2 border-border">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-2">
                  {member.social?.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:text-primary">
                        <Facebook className="h-4 w-4" />
                      </Button>
                    </a>
                  )}

                  {member.social?.mail && (
                    <a
                      href={`mailto:${member.social.mail}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:text-primary">
                    <Mail className="h-4 w-4" />
                  </Button>
                  </a>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">5</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;