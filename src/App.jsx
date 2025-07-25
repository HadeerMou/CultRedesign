import { useState } from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const featuredServices = [
    {
      id: 1,
      name: "Web Development",
      description:
        "Custom, responsive, and scalable websites that engage and convert.",
      image: "/assets/web/web.jpg",
    },
    {
      id: 2,
      name: "Digital Marketing",
      description:
        "Data-driven strategies that boost your brand’s visibility and",
      image: "/assets/digital marketing/marketing.jpg",
    },
    {
      id: 3,
      name: "Graphic Design",
      description:
        "Creative visuals that capture attention and communicate your message.",
      image: "/assets/graphic design/design.jpg",
    },
    {
      id: 4,
      name: "Photography",
      description: "Professional photography that brings your brand to life.",
      image: "/assets/photography/portraits/photography 1.png",
    },
  ];
  const blogs = [
    {
      id: 1,
      name: "5 Essential Digital Marketing Tips for Small Businesses",
      desc: " In today's competitive market, having a strong online presence is essential for small businesses. Digital marketing can be a powerful tool to reach your target audience, build brand awareness, and drive sales. But with limited resources, small businesses need to be strategic in their efforts.",
      img: "/assets/digital marketing/digital-marketing.jpg",
      contents: [
        {
          id: 1,
          title: "Define Your Target Audience",
          desc: "Knowing your target audience is the foundation of a successful digital marketing strategy. Rather than trying to appeal to everyone, focus on the people who are most likely to be interested in your products or services. Take the time to research demographics, behaviors, and pain points of your potential customers.",
          listTitle: "How to do it:",
          list: [
            "Conduct surveys, research market trends, and analyze competitors to identify customer preferences.",
            "Use analytics tools like Google Analytics or social media insights to understand the types of people visiting your site or engaging with your content.",
            "Create buyer personas—detailed descriptions of your ideal customers that guide your marketing efforts.",
          ],
          quote:
            "By clearly defining your audience, you can tailor your messaging, choose the right platforms, and create content that resonates with them.",
        },
        {
          id: 2,
          title: "Build a User-Friendly Website",
          desc: "Your website is often the first interaction potential customers will have with your business. A poorly designed or slow website can drive people away. A user-friendly, mobile-responsive, and visually appealing site is critical for keeping visitors engaged and encouraging them to take action.",
          listTitle: "Tips for optimizing your website:",
          list: [
            "Ensure your site loads quickly (aim for under three seconds).",
            "Make navigation intuitive and easy to use.",
            "Optimize your site for mobile devices since most users browse on their smartphones.",
            "Include clear calls-to-action (CTAs) that guide visitors to complete desired actions like signing up for a newsletter or making a purchase.",
            "Use SEO (Search Engine Optimization) best practices to ensure your website ranks well on search engines like Google.",
          ],
          quote:
            "A strong, well-optimized website can serve as the cornerstone of your digital marketing efforts and convert visitors into customers.",
        },
        {
          id: 3,
          title: "Leverage Social Media Marketing",
          desc: "Social media offers a direct line of communication to your customers, allowing you to engage with them in real time. However, it's crucial to focus on the platforms where your target audience spends the most time, rather than trying to be everywhere at once.",
          listTitle: "How to make the most of social media:",
          list: [
            "Choose platforms that align with your audience and business goals (e.g., Instagram for a visually-driven brand, LinkedIn for B2B businesses).",
            "Create valuable, engaging content that reflects your brand and speaks to your audience's needs.",
            "Interact with followers by responding to comments, asking questions, and joining conversations.",
            "Run paid ads on social media to increase your reach and target specific demographics with precision.",
          ],
          quote:
            "Consistency is key, so post regularly and maintain a cohesive brand voice. Social media can be a great way to build a loyal community around your business.",
        },
        {
          id: 4,
          title: "Utilize Email Marketing",
          desc: "Email marketing is one of the most cost-effective ways to nurture leads and maintain relationships with customers. By building an email list, you can deliver personalized content directly to the inbox of your subscribers, keeping them informed about promotions, new products, and relevant information.",
          listTitle: "Effective email marketing strategies:",
          list: [
            "Offer value to your subscribers with useful content, such as exclusive discounts, helpful tips, or educational resources.",
            "Segment your email list to send targeted messages based on user behavior, preferences, or demographics.",
            "Keep your emails short, visually appealing, and with a clear CTA.",
            "Use email automation to send welcome emails, abandoned cart reminders, or follow-up messages.",
          ],
          quote:
            "A well-planned email marketing campaign can boost customer loyalty and encourage repeat business.",
        },
        {
          id: 5,
          title: "Track, Analyze, and Adapt",
          desc: "One of the biggest advantages of digital marketing is the ability to track your efforts in real-time. By analyzing data, you can see what’s working and what needs improvement, ensuring that your campaigns are always optimized for the best results.",
          listTitle: "Key metrics to monitor:",
          list: [
            "Website traffic: Understand where your visitors are coming from and how they interact with your site.",
            "Conversion rate: Measure the percentage of visitors who take a desired action, such as making a purchase or signing up for your email list.",
            "Engagement rates: Track likes, shares, and comments on social media to gauge how well your content is resonating with your audience.",
            "Return on investment (ROI): Monitor how much revenue your digital marketing efforts are generating in comparison to your expenses.",
          ],
          quote:
            "Use tools like Google Analytics, social media insights, and email marketing software to track performance. Based on your findings, adjust your strategy and test new approaches to continually improve.",
        },
      ],
    },
    {
      id: 2,
      name: "The Importance of Responsive Web Design in 2024",
      desc: "In today’s digital landscape, a website is often the first point of contact between a business and its customers. As more people access the internet through smartphones, tablets, and various devices, having a responsive web design is no longer optional—it's essential. In 2024, user experience, mobile-first design, and SEO performance are heavily dependent on how well a website adapts to different screen sizes. Here's why responsive web design is more important than ever this year.",
      img: "/assets/digital marketing/responsive-web.png",
      contents: [
        {
          id: 1,
          title: "Mobile Traffic Dominates the Internet",
          desc: "As of 2024, mobile devices account for more than 60% of global web traffic. This number continues to grow as users increasingly rely on their smartphones to browse, shop, and consume content. If your website isn’t optimized for mobile, you risk losing a large portion of potential customers.",
          listTitle: "Why it matters:",
          list: [
            "Users expect websites to load quickly and look good on their mobile devices.",
            "A non-responsive site may appear cluttered or difficult to navigate on smaller screens, leading to high bounce rates.",
            "Google now prioritizes mobile-first indexing, meaning the mobile version of your site is considered for search rankings before the desktop version.",
          ],
          quote:
            "A responsive website ensures that your content looks great and functions well on any device, giving users a seamless experience and improving your chances of ranking higher in search results.",
        },
        {
          id: 2,
          title: "Improved User Experience (UX)",
          desc: "User experience is a critical factor in determining how long visitors stay on your website and whether they will return. A responsive web design ensures that your site automatically adjusts its layout, fonts, and images to suit different devices, providing a better experience for users regardless of how they access your content.",
          listTitle: "Benefits of improved UX:",
          list: [
            "Intuitive navigation: Responsive design makes it easier for users to find what they’re looking for, whether on a desktop or smartphone.",
            "Faster load times: A responsive design typically involves streamlined code and optimized images, leading to quicker page load speeds, which is crucial for retaining visitors.",
            "Higher conversion rates: When users can easily browse and engage with your site on any device, they’re more likely to complete a purchase, fill out a form, or take another desired action.",
          ],
          quote:
            "In 2024, user experience is closely linked to your business's success, making responsive design vital for keeping your audience engaged.",
        },
        {
          id: 3,
          title: "SEO Benefits",
          desc: "Search engine optimization (SEO) is essential for driving organic traffic to your website, and responsive web design plays a significant role in boosting your rankings. Google’s mobile-first indexing means that sites optimized for mobile devices will rank higher in search results. Furthermore, search engines favor websites that offer a positive user experience, which includes responsiveness and fast load times.",
          listTitle: "How responsive design boosts SEO:",
          list: [
            "Avoids duplicate content issues: Having one responsive website prevents the need for a separate mobile site, which could lead to duplicate content and hurt your SEO.",
            "Reduces bounce rate: A well-optimized responsive site reduces bounce rates by offering users a better browsing experience, which search engines view favorably.",
            "Enhances usability: Search engines reward sites that offer better usability and accessibility, both of which are key features of responsive design.",
          ],
          quote:
            "If you want to improve your search rankings in 2024, investing in a responsive website is a must.",
        },
        {
          id: 4,
          title: "Cost-Effectiveness and Efficiency",
          desc: "Maintaining multiple versions of your website—one for desktop and another for mobile—can be costly and time-consuming. Responsive web design eliminates the need for separate sites, making updates, maintenance, and management much simpler and more affordable.",
          listTitle: "Why it’s cost-effective:",
          list: [
            "A single responsive site reduces the amount of time and money spent on development, updates, and maintenance.",
            "Future-proof design: As new devices with varying screen sizes are introduced, a responsive site will continue to adapt without requiring additional adjustments.",
            "Increased ROI: By improving user experience and SEO with a responsive design, you're likely to see a higher return on your digital marketing efforts.",
          ],
          quote:
            "With a responsive design, businesses can save resources while still delivering a consistent experience across all platforms.",
        },
        {
          id: 5,
          title: "Future-Proofing Your Business",
          desc: "The number of devices accessing the internet is growing, and new technologies like foldable phones, smartwatches, and even smart TVs are becoming more popular. A responsive web design ensures that your site is future-proof, meaning it can adapt to new screen sizes and devices as they emerge.",
          listTitle: "Staying ahead of trends:",
          list: [
            "New devices and screen sizes will continue to enter the market, and a responsive design allows your site to remain relevant and accessible.",
            "It helps businesses avoid costly redesigns every time a new device trend emerges.",
            "Responsive design integrates well with emerging technologies, like voice search or augmented reality (AR), that are shaping the future of user interaction.",
          ],
          quote:
            "Investing in a responsive design now ensures that your website remains adaptable, no matter what the future of technology brings.",
        },
      ],
    },
    {
      id: 3,
      name: "How to Create a Strong Brand Identity Through Graphic Design",
      desc: "In today's visually driven world, a strong brand identity is essential for any business looking to stand out and connect with its audience. Graphic design plays a pivotal role in shaping that identity, helping to communicate your brand's message, values, and personality through visuals. Whether you're a small business or a large corporation, establishing a cohesive and memorable brand identity can have a long-lasting impact on your success.",
      img: "/assets/graphic design/graphic.png",
      contents: [
        {
          id: 1,
          title: "Understand Your Brand’s Core Values and Mission",
          desc: "Before diving into the design process, it’s crucial to have a clear understanding of your brand’s mission, values, and the message you want to convey to your audience. Your brand identity should be a visual representation of these core elements.",
          listTitle: "Key steps:",
          list: [
            "Define your mission and values: What does your brand stand for? What promise do you make to your customers? These answers will shape the foundation of your visual identity.",
            "Identify your unique selling proposition (USP): What sets you apart from competitors? Your USP will guide the design elements that make your brand memorable.",
            "Know your audience: Understanding who your target audience is will help you design in a way that appeals to their tastes and preferences.",
          ],
          quote:
            "A well-defined brand mission ensures that your graphic design choices—colors, typography, logo, and imagery—reflect your brand’s essence.",
        },
        {
          id: 2,
          title: "Create a Memorable Logo",
          desc: "A logo is often the first thing people associate with a brand, making it one of the most critical elements of your visual identity. It needs to be distinctive, simple, and versatile enough to be used across various platforms, from your website to business cards and social media.",
          listTitle: "Designing a strong logo:",
          list: [
            "Keep it simple: A cluttered or overly complex logo can be difficult to recognize and remember. A simple design ensures your logo is easily recognizable.",
            "Make it timeless: A well-designed logo should stand the test of time, so avoid overly trendy designs that may become outdated quickly.",
            "Ensure versatility: Your logo should look good in both color and black-and-white, on a large billboard or a small business card.",
          ],
          quote:
            "A memorable logo becomes the visual anchor for your brand and is often the first step in creating a cohesive brand identity.",
        },
        {
          id: 3,
          title: "Choose a Consistent Color Palette",
          desc: "Color plays a powerful role in evoking emotions and perceptions about your brand. The colors you choose should align with your brand's personality and resonate with your target audience. For instance, red is often associated with passion or excitement, while blue conveys trust and professionalism.",
          listTitle: "How to select the right colors:",
          list: [
            "Align with your brand’s message: Ensure that your color palette complements the emotions and values you want to communicate.",
            "Limit your palette: Stick to a limited number of primary and secondary colors to maintain consistency across your brand materials.",
            "Use color psychology: Different colors evoke different feelings. Be intentional about your color choices to elicit the right response from your audience.",
          ],
          quote:
            "A cohesive color palette used consistently across all branding materials will help strengthen brand recognition and create a unified look.",
        },
        {
          id: 4,
          title: "Select Appropriate Typography",
          desc: "Typography, like color, conveys meaning and plays a significant role in establishing your brand’s tone. The fonts you choose should reflect your brand’s personality, whether it’s playful, professional, elegant, or bold.",
          listTitle: "Tips for choosing typography:",
          list: [
            "Limit font usage: Stick to two or three fonts—typically a primary font for headlines and a secondary font for body text.",
            "Prioritize readability: Choose fonts that are easy to read across different platforms, especially on mobile devices.",
            "Match the tone of your brand: A sleek, modern brand might use a clean, sans-serif font, while a luxury brand may opt for a more elegant, serif font.",
          ],
          quote:
            "Using consistent typography across your website, marketing materials, and social media helps reinforce your brand’s identity.",
        },
        {
          id: 5,
          title: "Create a Cohesive Visual Style",
          desc: "A cohesive visual style is what ties all your design elements together—creating a unified, recognizable look for your brand. This includes how you use imagery, icons, illustrations, and patterns.",
          listTitle: "How to develop a visual style:",
          list: [
            "Be consistent with imagery: Whether you use photography, illustrations, or icons, make sure they share a common theme or style. For example, if you use bright, high-contrast images, keep that consistency across all visuals.",
            "Develop a style guide: A brand style guide outlines the proper use of your logo, color palette, fonts, and imagery. It ensures that your visual identity remains consistent, even when multiple designers or marketers are working on your brand materials.",
            "Consider your audience: Your visual style should appeal to your target audience. For example, a tech startup might adopt a minimalist, futuristic style, while a children’s toy brand could opt for a fun, colorful, and playful look.",
          ],
          quote:
            "Consistency in your visual style across all touchpoints helps establish familiarity and trust with your audience.",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        logoSrc="/assets/cultLogo 1.png"
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                featuredServices={featuredServices}
              />
            }
          />
          <Route
            path="/about"
            element={<About featuredServices={featuredServices} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs blogs={blogs} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />
        </Routes>
      </div>
      <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </div>
  );
}

export default App;
