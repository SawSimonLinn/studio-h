
export type Artwork = {
  id: string;
  title: string;
  description: string;
  medium: string;
  dimensions: string;
  status: 'Available' | 'Sold';
  type: 'Painting' | 'Sketch' | 'Digital' | 'Concept Art';
  imageId: string;
};

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Chromatic Dreams',
    description: 'A dive into the subconscious, expressed through a vibrant explosion of colors and shapes.',
    medium: 'Oil on Canvas',
    dimensions: '48" x 36"',
    status: 'Available',
    type: 'Painting',
    imageId: 'gallery-painting-1',
  },
  {
    id: '2',
    title: 'Silent Gaze',
    description: 'A study of emotion and form, captured in the subtle details of a charcoal portrait.',
    medium: 'Charcoal on Paper',
    dimensions: '18" x 24"',
    status: 'Sold',
    type: 'Sketch',
    imageId: 'gallery-sketch-1',
  },
  {
    id: '3',
    title: 'Otherworldly Flora',
    description: 'Imagining the plant life of a distant planet, where light and biology merge.',
    medium: 'Digital Painting',
    dimensions: '3000px x 3000px',
    status: 'Available',
    type: 'Digital',
    imageId: 'gallery-digital-1',
  },
  {
    id: '4',
    title: 'Misty Peaks',
    description: 'The quiet majesty of mountains shrouded in fog, capturing a moment of serene isolation.',
    medium: 'Oil on Canvas',
    dimensions: '24" x 30"',
    status: 'Available',
    type: 'Painting',
    imageId: 'gallery-painting-2',
  },
  {
    id: '5',
    title: 'Ephemeral Touch',
    description: 'A delicate exploration of connection and impermanence through the form of hands.',
    medium: 'Pencil on Paper',
    dimensions: '12" x 16"',
    status: 'Sold',
    type: 'Sketch',
    imageId: 'gallery-sketch-2',
  },
  {
    id: '6',
    title: 'Cybernetic Bloom',
    description: 'A fusion of organic and synthetic, questioning the boundaries of nature in a digital age.',
    medium: '3D Render & Digital Painting',
    dimensions: '4000px x 4000px',
    status: 'Available',
    type: 'Digital',
    imageId: 'gallery-digital-2',
  },
  {
    id: '7',
    title: 'Guardian of the Forgotten',
    description: 'Character concept for a silent protector of ancient ruins.',
    medium: 'Digital Sketch',
    dimensions: '2500px x 3500px',
    status: 'Available',
    type: 'Concept Art',
    imageId: 'gallery-concept-1',
  },
];

export const artworkTypes = ['All', 'Painting', 'Sketch', 'Digital', 'Concept Art'] as const;
export type ArtworkType = typeof artworkTypes[number];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  imageId?: string;
  excerpt: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: '2',
    slug: 'weekend-art-classes-enroll-now',
    title: 'Weekend Art Classes: Enroll Now for November!',
    date: 'October 2023',
    imageId: 'blog-post-2',
    excerpt: 'An art class where your child can find their passion and stress-free classes. Join now to unleash their creativity and imagination!',
    content: `<p>We are excited to announce our new Weekend Art Classes starting this November, featuring Teacher Harry, Teacher Htet, and Teacher Allie!</p>
<p>This is a wonderful opportunity for your child to find their passion in a stress-free and inspiring environment. Our classes are designed to unleash their creativity and imagination.</p>
<p>Join us to explore the world of art. Enroll now and let the creative journey begin!</p>
<p>Art is fun. Let's talk about art!</p>`,
  },
  {
    id: '1',
    slug: 'studio-h-exciting-news',
    title: "STUDIO-H's Exciting News!",
    date: 'November 2023',
    imageId: 'blog-post-1',
    excerpt: 'We are thrilled to announce that a long-cherished dream is finally happening: we will be launching a real STUDIO before the New Year!',
    content: `<p>We, the STUDIO-H team, would like to share some wonderful news with you!</p>
<p>Thanks to the continuous trust and faith placed in us by the parents of our online class students and the parents of our on-campus class students, I am thrilled to announce to all of you that a long-cherished dream and a major next step is finally happening: I will be launching a real STUDIO, true to our name, before the New Year!</p>
<p>Most of my classes are currently online. The unwavering, year-after-year trust shown by the parents of the hundreds of children—including those from distant areas who cannot travel easily, those who don't have time for drop-offs, and children from other countries—who enroll in my classes month after month has been a tremendous source of strength for me. The fact that new classes are fully enrolled almost instantly is what keeps me motivated.</p>
<p>Therefore, I absolutely do not want our online parents and children to feel that this new on-campus STUDIO has nothing to do with them. It has everything to do with you!</p>
<p>The parents of our on-campus students are the ones who truly inspired me to open this STUDIO. They take their children to class even when it rains, and endure the heat of summer. They patiently wait for their children, sitting downstairs and being bitten by mosquitos, or waiting in the darkness of the narrow staircase of my apartment when the power goes out. I always think: these mothers and fathers understand the true value of the one hour of joy and knowledge their children receive, which is why they endure these difficulties. I even have parents who travel all the way from Thanlyin. I have always wanted to create a more comfortable experience for the parents, just as the children enjoy their time here. That's why, in our new STUDIO, the lounge area for parents is my second priority, right after the classroom itself. I am eternally grateful for your support. Supporting us month after month, not just for a few months but for years, is truly not an easy thing to do.</p>
<p>Art is not just a school subject. It is not a subject where children are scolded if they don't get full marks. Therefore, if you have to choose, Art is often the last class to be picked. However, when creativity is nurtured and strengthened through Art, the way it supports the child's academic subjects and every other aspect of their life is the greatest value of learning Art.</p>
<p>Please stay tuned as we will be bringing Art classes, Workshops, and various other Art-related activities before the end of this year! Our TEAM will now be able to provide even better things for both the parents and the children.</p>
<p>To all the parents and all the children, the entire STUDIO-H Team extends a huge thank you!</p>`,
  },
];

export type StudentWork = {
    id: string;
    studentName: string;
    description: string;
    imageId: string;
};

export type Program = {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    imageIds: string[];
    learningPoints: string[];
    studentWork: StudentWork[];
};

export const programs: Program[] = [
  {
    id: 'program-1',
    slug: 'foundations-of-drawing',
    title: 'Foundations of Drawing',
    description: 'Learn the fundamentals of drawing, from basic shapes to complex still life compositions. A perfect starting point for any aspiring artist.',
    longDescription: '<p>Our Foundations of Drawing course is designed to build a strong base for all future artistic endeavors. We start with the very basics, helping students to see the world in terms of shapes, lines, and values. Over the weeks, you will progress from simple exercises to creating detailed still life compositions and understanding the principles of perspective.</p><p>This course is ideal for absolute beginners or those looking to refresh their fundamental skills. Our patient instructors provide one-on-one feedback to help you grow in confidence and ability.</p>',
    imageIds: ['program-drawing', 'program-drawing-2', 'program-drawing-3'],
    learningPoints: [
        'Mastering line control and shape language',
        'Understanding light, shadow, and form',
        'Principles of perspective and composition',
        'Working with charcoal and graphite',
        'Techniques for texture and detail',
    ],
    studentWork: [
        { id: 'sw-draw-1', studentName: 'Emily', description: 'Charcoal study of a sphere.', imageId: 'student-work-drawing-1' },
        { id: 'sw-draw-2', studentName: 'James', description: 'Pencil sketch of a classic vase.', imageId: 'student-work-drawing-2' },
        { id: 'sw-draw-3', studentName: 'Chloe', description: 'Detailed still life composition.', imageId: 'student-work-drawing-3' },
    ]
  },
  {
    id: 'program-2',
    slug: 'oil-painting-essentials',
    title: 'Oil Painting Essentials',
    description: 'Discover the rich world of oil painting. This course covers color mixing, brush techniques, and creating luminous landscapes.',
    longDescription: '<p>Dive into the vibrant and versatile medium of oil painting. Our Essentials course demystifies the process, guiding you through everything from preparing your canvas to applying the final varnish. You will learn the secrets of color theory and mixing, master various brushwork techniques for different effects, and create paintings with depth and luminosity.</p><p>The course focuses on landscape painting, but the skills you learn are transferable to any subject. Join us to unlock the timeless beauty of oils.</p>',
    imageIds: ['program-painting'],
    learningPoints: [
        'Comprehensive color theory and mixing',
        'Alla prima (wet-on-wet) techniques',
        'Layering and glazing for depth',
        'Mastering various brush types and strokes',
        'Composition for compelling landscapes',
    ],
    studentWork: [
        { id: 'sw-paint-1', studentName: 'Olivia', description: 'First landscape painting.', imageId: 'student-work-painting-1' },
        { id: 'sw-paint-2', studentName: 'Noah', description: 'Experiment with color mixing.', imageId: 'student-work-painting-2' },
        { id: 'sw-paint-3', studentName: 'Sophia', description: 'A vibrant floral still life.', imageId: 'student-work-painting-3' },
    ]
  },
  {
    id: 'program-3',
    slug: 'digital-art-and-illustration',
    title: 'Digital Art & Illustration',
    description: 'Bring your ideas to life on a digital canvas. Learn to use modern tools to create stunning illustrations and concept art.',
    longDescription: '<p>Unleash your imagination in the digital realm. This course introduces you to the exciting world of digital art using industry-standard software and hardware. You will learn to navigate the digital toolkit, from layers and brushes to masks and blending modes. Our projects are designed to be fun and engaging, covering character design, environmental concept art, and polished illustration work.</p><p>Whether you dream of working in games, animation, or simply want to create digital masterpieces, this course provides the technical skills and creative guidance you need to succeed.</p>',
    imageIds: ['program-digital'],
    learningPoints: [
        'Proficiency in core digital art software (e.g., Procreate/Photoshop)',
        'Digital sketching and line art techniques',
        'Coloring, shading, and lighting for digital work',
        'Character design principles',
        'Creating concept art and illustrations',
    ],
    studentWork: [
        { id: 'sw-digital-1', studentName: 'Liam', description: 'First character concept.', imageId: 'student-work-digital-1' },
        { id: 'sw-digital-2', studentName: 'Ava', description: 'Fantasy environment design.', imageId: 'student-work-digital-2' },
        { id: 'sw-digital-3', studentName: 'Mason', description: 'Stylized self-portrait.', imageId: 'student-work-digital-3' },
    ]
  },
];
