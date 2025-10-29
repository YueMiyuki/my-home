type Language = {
  name: string;
  percentage: number;
  color: string;
};

export async function fetchPinnedProjects() {
  try {
    const response = await fetch(
      "https://pinned.berrysauce.dev/get/yuemiyuki",
      { next: { revalidate: 3600 } },
    );
    if (!response.ok) {
      throw new Error("Failed to fetch pinned projects");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching pinned projects:", error);
    return [];
  }
}

export async function fetchLanguageStats(): Promise<Language[]> {
  try {
    const response = await fetch(
      "https://github-readme-stats.vercel.app/api/top-langs/?username=yuemiyuki&langs_count=6",
      {
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch language stats");
    }

    const svgText = await response.text();

    // Parse SVG using custom parser
    const languages = parseLanguagesFromSvg(svgText);
    return languages;
  } catch (error) {
    console.error("Error fetching language stats:", error);
    return [
      { name: "JavaScript", percentage: 55.56, color: "#f1e05a" },
      { name: "TypeScript", percentage: 32.95, color: "#3178c6" },
      { name: "Java", percentage: 4.66, color: "#b07219" },
      { name: "CSS", percentage: 3.88, color: "#663399" },
      { name: "Python", percentage: 2.96, color: "#3572A5" },
    ];
  }
}

function parseLanguagesFromSvg(svgText: string): Language[] {
  try {
    const languages: Language[] = [];

    // Find all language groups with class "stagger"
    const groupRegex = /<g[^>]*class="stagger"[^>]*>([\s\S]*?)<\/g>/g;
    let groupMatch;

    while ((groupMatch = groupRegex.exec(svgText)) !== null) {
      const groupContent = groupMatch[1];

      // Extract language name
      const langNameRegex = /<text data-testid="lang-name"[^>]*>(.*?)<\/text>/;
      const langNameMatch = langNameRegex.exec(groupContent);

      if (!langNameMatch) continue;
      const langName = langNameMatch[1].trim();

      // Extract percentage
      const percentageRegex = /<text x="215" y="34"[^>]*>(.*?)<\/text>/;
      const percentageMatch = percentageRegex.exec(groupContent);

      if (!percentageMatch) continue;
      const percentageText = percentageMatch[1];
      const percentage = Number.parseFloat(percentageText.replace("%", ""));

      // Extract color from the rect fill in lang-progress
      const colorRegex = /<rect[^>]*fill="([^"]+)"[^>]*>/;
      const colorMatch = colorRegex.exec(groupContent);

      if (!colorMatch) continue;
      const color = colorMatch[1];

      languages.push({
        name: langName,
        percentage,
        color,
      });
    }

    return languages.length > 0
      ? languages
      : [
          {
            name: "Damn, can't find shit",
            percentage: 100.0,
            color: "#f1e05a",
          },
        ];
  } catch (error) {
    console.error("Error parsing SVG data:", error);
    return [
      { name: "JavaScript", percentage: 55.56, color: "#f1e05a" },
      { name: "TypeScript", percentage: 32.95, color: "#3178c6" },
      { name: "Java", percentage: 4.66, color: "#b07219" },
      { name: "CSS", percentage: 3.88, color: "#663399" },
      { name: "Python", percentage: 2.96, color: "#3572A5" },
    ];
  }
}
