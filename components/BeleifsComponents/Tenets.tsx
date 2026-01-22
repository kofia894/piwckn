const Tenets = [
  {
    id: 1,
    title: "The Bible",
    content: "We believe in the divine inspiration and authority of the Holy Scriptures. That the Bible is infallible in its declaration, final in its authority, comprehensive and all-sufficient in its provisions.",
    references: ["2 Timothy 3:16-17", "2 Peter 1:20-21"]
  },
  {
    id: 2,
    title: "The One True God",
    content: "We believe in the existence of the One True God, Elohim, maker of the whole universe; indefinable but revealed as Triune God – the Father, the Son and the Holy Spirit; one in nature, essence and attributes.",
    attributes: [
      { name: "Omnipotent", refs: ["Job 42:2", "Revelation 19:6"] },
      { name: "Omnipresent", refs: ["Psalm 139:7-12", "Psalm 147:5"] },
      { name: "Omniscient", refs: ["Isaiah 46:9-10", "Acts 5:4-5"] }
    ],
    references: ["Genesis 1:1", "Genesis 1:26", "Matthew 3:16-17", "Matthew 28:19", "2 Corinthians 13:14", "Deuteronomy 6:4"]
  },
  {
    id: 3,
    title: "The Depraved Nature of Humanity",
    content: "We believe that all have sinned and come short of the glory of God, and are subject to eternal punishment, and need Repentance and Regeneration.",
    references: ["Genesis 3:1-19", "Isaiah 53:6", "Romans 3:23", "Matthew 13:41-42", "Romans 6:23", "Acts 2:38", "Matthew 4:17", "John 3:3-5", "Titus 3:5"]
  },
  {
    id: 4,
    title: "The Saviour",
    content: "We believe humanity's need of a Saviour has been met in the person of Jesus Christ.",
    aspects: [
      { name: "His Deity", refs: ["Isaiah 9:6", "John 1:1", "John 20:28", "Romans 9:5"] },
      { name: "Virgin Birth", refs: ["Isaiah 7:14", "Matthew 1:18", "Luke 1:25-26"] },
      { name: "Atoning Death", refs: ["Romans 3:25", "Hebrews 9:22", "1 John 2:2"] },
      { name: "Resurrection", refs: ["Matthew 28:5-7", "Acts 2:24", "1 Corinthians 15:3-4"] },
      { name: "Ascension", refs: ["Acts 1:9-11", "Acts 2:33-36"] },
      { name: "Abiding Intercession", refs: ["Romans 8:34", "Hebrews 7:25"] },
      { name: "Second Coming", refs: ["Acts 1:11", "1 Thessalonians 4:16-18", "Revelation 22:12"] }
    ],
    references: ["Matthew 1:21", "John 4:42", "Acts 2:36", "Ephesians 5:23", "Philippians 2:6-11"]
  },
  {
    id: 5,
    title: "Repentance, Justification & Sanctification",
    content: "We believe all humans have to repent and confess their sins before God, and believe in the vicarious death of Jesus Christ before they can be justified before God. We believe in the sanctification of the believer through the working of the Holy Spirit and God's gift of eternal life to the believer.",
    references: ["Luke 15:7", "Acts 2:38", "Acts 3:19", "Acts 17:30", "Romans 4:25", "Romans 5:1", "1 Corinthians 1:30", "1 Corinthians 6:11", "John 17:2-3", "John 10:27-28", "Romans 6:23", "1 John 5:11-13"]
  },
  {
    id: 6,
    title: "Baptism & The Lord's Supper",
    content: "We believe in the ordinance of Baptism by immersion as a testimony of a convert who has attained a responsible age of 13 years. Infants and children are not baptised but are dedicated to the Lord. We believe in the ordinance of the Lord's Supper or Holy Communion, which should be partaken by all members who are in full fellowship.",
    references: ["Matthew 3:16", "Matthew 28:19", "Mark 1:9-10", "Mark 16:16", "Acts 2:38", "Mark 10:13-16", "Luke 2:22-24", "Luke 22:19-20", "Acts 20:7", "1 Corinthians 11:23-33"]
  },
  {
    id: 7,
    title: "Baptism, Gifts & Fruit of the Holy Spirit",
    content: "We believe in the Baptism of the Holy Spirit for all believers with the initial evidence of speaking in tongues, and in the operation of the gifts and fruit of the Holy Spirit.",
    references: ["Joel 2:28-29", "Acts 2:3-4", "Acts 2:38-39", "Acts 10:44-46", "Acts 19:16", "Romans 12:6-8", "Galatians 5:22-23", "1 Corinthians 12:8-11", "1 Corinthians 12:28-30"]
  },
  {
    id: 8,
    title: "Divine Healing",
    content: "We believe that the healing of sicknesses and diseases is provided for God's people in the atonement. However, the Church is not opposed to medication by qualified medical practitioners.",
    references: ["Isaiah 53:4-5", "Matthew 8:7-13", "Matthew 8:16-17", "Mark 16:17-18", "Luke 13:10-16", "Acts 10:38", "James 5:14-16"]
  },
  {
    id: 9,
    title: "Tithes & Offerings",
    content: "We believe in tithing and in the giving of freewill offerings towards the furtherance of the cause of the Kingdom of God. We believe that God blesses a cheerful giver.",
    references: ["Genesis 14:18-20", "Malachi 3:6-10", "Matthew 23:23", "Acts 20:35", "Hebrews 7:1-4", "1 Corinthians 16:1-2", "2 Corinthians 9:1-9"]
  },
  {
    id: 10,
    title: "The Second Coming & The Next Life",
    content: "We believe in the second coming of Christ and the resurrection of the dead, both the saved and the unsaved. They that are saved to the resurrection of life and the unsaved to the resurrection of damnation.",
    references: ["Daniel 12:2", "Mark 13:26", "John 5:28-29", "Acts 1:11", "Acts 10:42", "Romans 2:7-11", "Romans 6:23"]
  },
  {
    id: 11,
    title: "Marriage & Family Life",
    content: "We believe in the institution of marriage as a union established and ordained by God for the lifelong, intimate relationship between a man as husband and a woman as wife as biologically defined at birth. We believe that God instituted marriage primarily for mutual help, fellowship and comfort that one ought to have for the other and for the honourable procreation of children, and their training in love, obedience to the Lord and responsible citizenship.",
    references: ["Genesis 2:18", "Genesis 2:21-25", "Matthew 19:4-6", "1 Corinthians 7:1-2"]
  },
];

export default Tenets;
