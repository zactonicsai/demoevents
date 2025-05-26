import { NextResponse } from "next/server"

// Static events data
const EVENTS_DATA = [
  {
    event_id: "event_1",
    title: "Montgomery City-County Public Library Summer Hours",
    date: "MAY 25",
    time: "MAY 25, 2025 - SEPTEMBER 30, 2025",
    categories: ["Library Events", "FREE Events"],
    description: "N/A",
  },
  {
    event_id: "event_2",
    title: "Memorial Day Holiday and Weekend / ZOO OPEN",
    date: "MAY 26",
    time: "9:30 AM - 3:30 PM",
    categories: ["Zoo Events", "Family Friendly Events", "City Events"],
    description:
      "The Montgomery Zoo and Mann Wildlife Learning Museum are OPEN on Memorial Day. We look forward to seeing you at the Zoo.",
  },
  {
    event_id: "event_3",
    title: "Breast Cancer Awareness Bash",
    date: "MAY 31",
    time: "10:00 AM - 2:00 PM",
    categories: [
      "Community Events",
      "Parks & Recreation Events",
      "Family Friendly Events",
      "FREE Events",
      "City Events",
      "Outdoor Events",
      "Food Truck Events",
      "Community Center Events & Programs",
    ],
    description: "A family-friendly event for representation and remembrance",
  },
  {
    event_id: "event_4",
    title: "Zoofari Summer Camp: 5-6 year olds, June 2-6",
    date: "JUN 02",
    time: "JUNE 02, 2025, 8:30 AM - JUNE 06, 2025, 4:30 PM",
    categories: ["Zoo Events", "Family Friendly Events", "City Events", "Community Center Events & Programs"],
    description:
      "Join us for Zoofari Summer Camp at the Montgomery Zoo and Mann Wildlife Learning Museum. The perfect way for your camper to enjoy a WILD summer. Summer camp is designed for boys and girls to enjoy a full-day zoo experience filled with adventure and fun. SPACE IS LIMITED!",
  },
  {
    event_id: "event_5",
    title: "Thrifty Tuesdays",
    date: "JUN 03",
    time: "12:00 PM - 4:00 PM",
    categories: ["Zoo Events", "Family Friendly Events", "City Events"],
    description: "Discounted admissions, every Tuesday during June and July, 12pm (noon) - 4pm",
  },
  {
    event_id: "event_6",
    title: "Free Fish Day",
    date: "JUN 07",
    time: "7:30 AM - 11:30 AM",
    categories: [
      "Community Events",
      "Parks & Recreation Events",
      "Family Friendly Events",
      "FREE Events",
      "City Events",
      "Outdoor Events",
    ],
    description: "A free fintastic day of family fun!",
  },
  {
    event_id: "event_7",
    title: "Zoofari Summer Camp: 5-6 year olds, June 9-14",
    date: "JUN 09",
    time: "JUNE 09, 2025, 8:30 AM - JUNE 13, 2025, 4:30 PM",
    categories: ["Zoo Events", "Family Friendly Events", "City Events", "Camps & Programs for Youth"],
    description:
      "Join us for Zoofari Summer Camp at the Montgomery Zoo and Mann Wildlife Learning Museum. The perfect way for your camper to enjoy a WILD summer. Summer camp is designed for boys and girls to enjoy a full-day zoo experience filled with adventure and fun. SPACE IS LIMITED!",
  },
  {
    event_id: "event_8",
    title: "Thrifty Tuesdays",
    date: "JUN 10",
    time: "12:00 PM - 4:00 PM",
    categories: ["Zoo Events", "Family Friendly Events", "City Events"],
    description: "Discounted admissions, every Tuesday during June and July, 12pm (noon) - 4pm",
  },
  {
    event_id: "event_9",
    title: "Military Appreciation Day",
    date: "JUN 12",
    time: "9:30 AM - 3:30 PM",
    categories: ["Zoo Events", "Family Friendly Events", "City Events", "Festivals"],
    description:
      "Montgomery Zoo invites all active duty and retired military personnel to visit the Zoo for free on Military Appreciation Day. Coca-Cola, Maxwell Air Force Base, the Zoo, the Montgomery Chamber, and local sponsors partner to hold this annual event that recognizes our national heroes.",
  },
  {
    event_id: "event_10",
    title: "Montgomery Dragon Boat Festival",
    date: "JUN 14",
    time: "JUNE 14, 2025",
    categories: ["Community Events", "City Events", "Outdoor Events", "Cultural Affairs Events", "Festivals"],
    description: "N/A",
  },
  {
    event_id: "event_11",
    title: "The Legacy Golf Championship Junior-AM",
    date: "JUN 14",
    time: "7:00 AM - 3:00 PM",
    categories: [
      "Community Events",
      "Family Friendly Events",
      "City Events",
      "Outdoor Events",
      "Sports Events",
      "Food Truck Events",
      "Music",
    ],
    description: "N/A",
  },
  {
    event_id: "event_12",
    title: "Father's Day at Zoo",
    date: "JUN 15",
    time: "9:30 AM - 3:30 PM",
    categories: ["Zoo Events", "Family Friendly Events", "City Events"],
    description:
      "Celebrate Father's Day at the Montgomery Zoo and Mann Wildlife Learning Museum. All Dad's receive FREE admission, so make plans to join us for Dad's special day.",
  },
  {
    event_id: "event_13",
    title: "The Legacy Golf Championship",
    date: "JUN 16",
    time: "JUNE 16, 2025, 7:00 AM - JUNE 18, 2025, 5:00 PM",
    categories: [
      "Family Friendly Events",
      "Health and Fitness Events",
      "City Events",
      "Sports Events",
      "Food Truck Events",
      "Art",
    ],
    description: "N/A",
  },
  {
    event_id: "event_14",
    title: "SOLD OUT / Zoofari Summer Camp: 7-8 year olds, June 16-20",
    date: "JUN 16",
    time: "JUNE 16, 2025, 8:30 AM - JUNE 20, 2025, 4:30 PM",
    categories: ["Zoo Events", "Family Friendly Events"],
    description:
      "Join us for Zoofari Summer Camp at the Montgomery Zoo and Mann Wildlife Learning Museum. The perfect way for your camper to enjoy a WILD summer. Summer camp is designed for boys and girls to enjoy a full-day zoo experience filled with adventure and fun. SPACE IS LIMITED!",
  },
  {
    event_id: "event_15",
    title: "Thrifty Tuesdays",
    date: "JUN 17",
    time: "12:00 PM - 4:00 PM",
    categories: ["Zoo Events", "Family Friendly Events", "City Events"],
    description: "Discounted admissions, every Tuesday during June and July, 12pm (noon) - 4pm",
  },
  {
    event_id: "event_16",
    title: "Juneteenth Holiday, Zoo/Museum OPEN",
    date: "JUN 19",
    time: "9:30 AM - 3:30 PM",
    categories: ["Community Events", "Zoo Events", "Family Friendly Events"],
    description:
      "The Montgomery Zoo and Mann Wildlife Learning Museum are OPEN on Juneteenth Holiday, June 19. We look forward to seeing you at the Zoo.",
  },
  {
    event_id: "event_17",
    title: "Teen Pool Party",
    date: "JUN 21",
    time: "1:00 PM - 5:00 PM",
    categories: [
      "Community Events",
      "Parks & Recreation Events",
      "Family Friendly Events",
      "FREE Events",
      "City Events",
      "Outdoor Events",
    ],
    description: "For teens ages 13-17!",
  },
  {
    event_id: "event_18",
    title: "SOLD OUT / Zoofari Summer Camp: 7-8 year olds, June 23-27",
    date: "JUN 23",
    time: "JUNE 23, 2025, 8:30 AM - JUNE 27, 2025, 4:30 PM",
    categories: ["Zoo Events", "Family Friendly Events", "City Events", "Community Center Events & Programs"],
    description:
      "Join us for Zoofari Summer Camp at the Montgomery Zoo and Mann Wildlife Learning Museum. The perfect way for your camper to enjoy a WILD summer. Summer camp is designed for boys and girls to enjoy a full-day zoo experience filled with adventure and fun. SPACE IS LIMITED!",
  },
  {
    event_id: "event_19",
    title: "Thrifty Tuesdays",
    date: "JUN 24",
    time: "12:00 PM - 4:00 PM",
    categories: ["Zoo Events", "Family Friendly Events", "City Events"],
    description: "Discounted admissions, every Tuesday during June and July, 12pm (noon) - 4pm",
  },
  {
    event_id: "event_20",
    title: "A Night of the Arts",
    date: "JUN 27",
    time: "6:30 PM - 8:30 PM",
    categories: ["Community Events", "Parks & Recreation Events", "Armory Center Events"],
    description: "A vibrant evening filled with rhythm, movement, and creativity!",
  },
]

// Function to get events data
function getEventsData() {
  // Filter out events with N/A titles
  return EVENTS_DATA.filter((event) => event.title !== "N/A")
}

export async function GET() {
  try {
    const events = getEventsData()
    return NextResponse.json({
      success: true,
      data: events,
      total: events.length,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch events" }, { status: 500 })
  }
}
