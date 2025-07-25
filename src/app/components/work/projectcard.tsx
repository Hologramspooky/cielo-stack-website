// app/components/work/ProjectCard.tsx
import Image from 'next/image';

// Define the type for a project object for type safety
type Project = {
  name: string;
  description: string;
  stack: string;
  timeline: string;
  outcome: string;
  industry: string;
  image: string;
};

// The component receives a 'project' object as a prop
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 group">
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Tech Stack</p>
          <p className="text-sm text-gray-700">{project.stack}</p>
        </div>
        
        {/* Outcome */}
        <div className="border-t border-gray-100 pt-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            {project.outcome}
          </span>
        </div>
      </div>
    </div>
  );
}