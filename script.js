"use strict";

const websiteImages = {
  logo: "images/logo/logo.svg",
  hero: "images/hero/market-illustration.svg",
  dse: "images/dse/dse-building.svg",
  cse: "images/cse/cse-building.svg",
  education: "images/education/investment.svg",
  fallback: "images/market/image-placeholder.svg"
};

const translations = {
  bn: {
    skip:"মূল কনটেন্টে যান", marketStatus:"বাজারের অবস্থা: প্রদর্শনী", dataNotice:"নমুনা ডেটা — লাইভ বাজারদর নয়", brand:"শেয়ার বাজার", navMarket:"বাজার", navStocks:"শেয়ার", navExchanges:"এক্সচেঞ্জ", navNews:"খবর", navLearn:"শিখুন", navInvestor:"বিনিয়োগকারী গাইড", heroEyebrow:"বাংলাদেশের বিনিয়োগ জগৎ", heroTitle:"বাংলাদেশ শেয়ার বাজারের<br><em>সম্পূর্ণ তথ্য</em> এক জায়গায়", heroLead:"বাজার সম্পর্কে জানুন, তথ্য যাচাই করুন এবং নিজের সিদ্ধান্ত নিজে নিন—সহজ ভাষায়, এক নির্ভরযোগ্য শিক্ষামূলক প্ল্যাটফর্মে।", exploreMarket:"বাজার দেখুন", startLearning:"শেখা শুরু করুন", heroNote:"শিক্ষা ও তথ্যের জন্য তৈরি · বিনিয়োগ পরামর্শ নয়", marketSnapshot:"বাজারের নমুনা চিত্র", sample:"নমুনা", illustrationOnly:"শুধু দৃষ্টান্তমূলক চার্ট", sampleData:"নমুনা ডেটা", marketLearning:"বাজার শিক্ষা", informedInvesting:"জেনে বিনিয়োগ", trustedSources:"তথ্য যাচাই", sourceFirst:"উৎস-প্রথম পদ্ধতি", trustIntro:"বাজারের তথ্য যাচাই করুন", marketSectionEyebrow:"বাজার এক নজরে", marketTitle:"বাজারের সারসংক্ষেপ", marketIntro:"নিচের প্রতিটি সংখ্যা কেবল ইন্টারফেস প্রদর্শনের জন্য—বাস্তব বাজারতথ্য নয়।", dseBroad:"DSE ব্রড ইনডেক্স", blueChip:"বাছাইকৃত ৩০ কোম্পানি", shariahIndex:"শরিয়াহ সূচক", cseIndex:"CSE নির্বাচিত সূচক", turnover:"মোট লেনদেন", marketCap:"বাজার মূলধন", advancers:"দর বেড়েছে", decliners:"দর কমেছে", unchanged:"অপরিবর্তিত", sampleDisclaimer:"সমস্ত বাজার পরিসংখ্যান কাল্পনিক নমুনা; কোনো লাইভ API সংযুক্ত নেই।", exchangeEyebrow:"বাংলাদেশের পুঁজিবাজার", exchangeTitle:"দুটি এক্সচেঞ্জ, একটি বাজার", exchangeIntro:"দেশের দুই স্টক এক্সচেঞ্জ সম্পর্কে জানুন এবং সবসময় তাদের প্রকাশিত তথ্য যাচাই করুন।", dseTitle:"ঢাকা স্টক এক্সচেঞ্জ", dseDescription:"ঢাকা স্টক এক্সচেঞ্জ বাংলাদেশের প্রধান স্টক এক্সচেঞ্জ। এটি তালিকাভুক্ত সিকিউরিটিজের সংগঠিত লেনদেন, বাজার তথ্য প্রকাশ এবং বিনিয়োগকারীদের অংশগ্রহণের জন্য একটি নিয়ন্ত্রিত প্ল্যাটফর্ম পরিচালনা করে। ইতিহাস ও কার্যক্রমের সর্বশেষ তথ্য DSE-এর অফিসিয়াল ওয়েবসাইটে দেখুন।", cseTitle:"চট্টগ্রাম স্টক এক্সচেঞ্জ", cseDescription:"চট্টগ্রাম স্টক এক্সচেঞ্জ দেশের দ্বিতীয় স্টক এক্সচেঞ্জ। আধুনিক প্রযুক্তিভিত্তিক লেনদেন ও বাজারে অংশগ্রহণের সুযোগের মাধ্যমে এটি বাংলাদেশের পুঁজিবাজারে অবদান রাখে। তালিকাভুক্তি, বাজার কার্যক্রম ও বিনিয়োগকারীর তথ্য CSE-এর অফিসিয়াল ওয়েবসাইটে যাচাই করুন।", visitOfficial:"অফিসিয়াল তথ্য দেখুন", stocksEyebrow:"শেয়ার অনুসন্ধান", stocksTitle:"শেয়ার বাজারের তথ্য", stocksIntro:"কোড, কোম্পানি বা খাত দিয়ে খুঁজুন, সাজান এবং নমুনা তালিকাটি দেখুন।", searchPlaceholder:"কোম্পানি বা কোড খুঁজুন", sector:"খাত", allSectors:"সব খাত", sortHint:"কলাম শিরোনামে চাপ দিয়ে সাজান", company:"কোম্পানি", code:"কোড", lastPrice:"সর্বশেষ দর", change:"পরিবর্তন", changePct:"পরিবর্তন %", volume:"পরিমাণ", value:"লেনদেন মূল্য", noResults:"কোনো ফলাফল পাওয়া যায়নি।", updatedSample:"নমুনা · আপডেট: বাস্তব সময় নয়", results:"টি নমুনা কোম্পানি", marketPulse:"বাজারের গতি", moversTitle:"আজকের বাজারের চলন", topGainers:"শীর্ষ দরবৃদ্ধি", topLosers:"শীর্ষ দরপতন", mostTraded:"সর্বাধিক লেনদেন", shares:"শেয়ার", directoryEyebrow:"কোম্পানি ডিরেক্টরি", directoryTitle:"বিভিন্ন খাত,<br>অসংখ্য সম্ভাবনা", directoryIntro:"তালিকাভুক্ত কোম্পানি ও তাদের খাত সম্পর্কে জানার জন্য এই পরিচিতিমূলক ডিরেক্টরি। এখানে প্রদর্শিত সংক্ষিপ্ত বর্ণনা শিক্ষামূলক এবং বিনিয়োগ সুপারিশ নয়। কোম্পানির আর্থিক প্রতিবেদন ও হালনাগাদ তথ্য এক্সচেঞ্জ বা কোম্পানির প্রকাশনা থেকে যাচাই করুন।", browseDirectory:"তালিকা দেখুন", banking:"ব্যাংক", pharma:"ওষুধ ও রসায়ন", textile:"বস্ত্র", engineering:"প্রকৌশল", insurance:"বীমা", energy:"জ্বালানি", food:"খাদ্য ও সংশ্লিষ্ট", it:"তথ্যপ্রযুক্তি", moreSectors:"আরও খাত", profileEyebrow:"কোম্পানি প্রোফাইলের উদাহরণ", gpDescription:"Grameenphone বাংলাদেশের টেলিযোগাযোগ খাতের একটি পরিচিত কোম্পানি। এই নমুনা প্রোফাইলটি কেবল তথ্য কীভাবে সাজানো যেতে পারে তা বোঝায়; এখানে দেখানো কোনো আর্থিক পরিমাপ বর্তমান বা যাচাইকৃত নয়।", industry:"শিল্পখাত", telecom:"টেলিযোগাযোগ", marketPrice:"বাজারদর", eps:"শেয়ারপ্রতি আয় (EPS)", navps:"শেয়ারপ্রতি নিট সম্পদ (NAVPS)", peRatio:"P/E অনুপাত", profileSource:"আর্থিক তথ্য প্রকাশ করা হয়নি—কোম্পানির সর্বশেষ নিরীক্ষিত প্রতিবেদন এবং DSE/CSE প্রকাশনা দেখুন।", dividendHistory:"ডিভিডেন্ড ইতিহাস ও আর্থিক প্রতিবেদন", verifyDse:"DSE-তে যাচাই করুন", chartEyebrow:"চার্ট ল্যাব", chartTitle:"বাজারের গতিপথ,<br>আপনার দৃষ্টিতে", chartIntro:"ইন্টারঅ্যাকটিভ চার্টটি কেবল কাল্পনিক দৃষ্টান্ত। প্রকৃত মূল্য-ইতিহাস সংযুক্ত করার আগে অনুমোদিত ডেটা সরবরাহকারী ও উৎস উল্লেখ করুন।", chartRange:"সময়সীমা", range1d:"১ দিন", range1w:"১ সপ্তাহ", range1m:"১ মাস", range1y:"১ বছর", lineChart:"লাইন", volumeChart:"ভলিউম", chartSource:"উৎস: সংযুক্ত নয় · প্রদর্শনী ডেটা", newsEyebrow:"তথ্যসূত্রে থাকুন", newsTitle:"বাজারের খবর ও ঘোষণা", newsIntro:"যাচাই করা কোনো লাইভ সংবাদ ফিড সংযুক্ত নেই। নিচের লিংকগুলো অফিসিয়াল তথ্যসূত্র—এখানে কোনো কাল্পনিক সংবাদ দেখানো হয় না।", officialSources:"অফিসিয়াল উৎস", dseAnnouncements:"কোম্পানি ঘোষণা ও বাজার তথ্য", dseSourceDescription:"দাম, ট্রেডিং তথ্য এবং তালিকাভুক্ত কোম্পানির প্রকাশনা সরাসরি DSE-তে যাচাই করুন।", cseAnnouncements:"বাজার কার্যক্রম ও ঘোষণা", cseSourceDescription:"CSE-এর বাজার তথ্য, কোম্পানি ঘোষণা এবং বিনিয়োগকারী নির্দেশনা দেখুন।", bsecAnnouncements:"নিয়ন্ত্রক সংস্থার বিজ্ঞপ্তি", bsecSourceDescription:"বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশনের নির্দেশনা ও বিজ্ঞপ্তি যাচাই করুন।", economicUpdates:"অর্থনীতি ও বাংলাদেশ ব্যাংক", bbSourceDescription:"মুদ্রানীতি ও সামষ্টিক অর্থনৈতিক প্রকাশনার জন্য বাংলাদেশ ব্যাংকের তথ্যসূত্র দেখুন।", noNewsFeed:"লাইভ সংবাদ প্রদর্শনের আগে যাচাইকৃত সংবাদ সরবরাহকারী যুক্ত করুন। IPO, লভ্যাংশ ও অর্থনৈতিক খবরও উৎস ছাড়া দেখানো হবে না।", ipoEyebrow:"নতুন বিনিয়োগকারীদের জন্য", ipoTitle:"আইপিও কীভাবে কাজ করে?", ipoIntro:"Initial Public Offering (IPO) হলো কোনো প্রতিষ্ঠানের প্রথমবার জনসাধারণের কাছে শেয়ার ইস্যু করার প্রক্রিয়া। বাংলাদেশে আবেদন, যোগ্যতা, সময়সীমা ও বরাদ্দের নিয়ম ইস্যু ও নিয়ন্ত্রক নির্দেশনা অনুযায়ী পরিবর্তিত হয়।", ipoStep1:"BSEC ও এক্সচেঞ্জের যাচাইকৃত বিজ্ঞপ্তি পড়ুন", ipoStep2:"যোগ্যতা ও প্রসপেক্টাস যাচাই করুন", ipoStep3:"অনুমোদিত চ্যানেলে আবেদন করুন", ipoStep4:"বরাদ্দ ও ফেরতের তথ্য অফিসিয়ালি দেখুন", checkIpo:"BSEC-তে IPO তথ্য যাচাই", noIpoDates:"যাচাইকৃত আসন্ন IPO তারিখ সংযুক্ত নয়; কোনো তারিখ অনুমান করে দেখানো হয়নি।", learnEyebrow:"শেখার সহজ পাঠ", learnTitle:"বিনিয়োগ বুঝুন, ধাপে ধাপে", learnIntro:"শেয়ারবাজারের মূল ধারণাগুলো জানুন। যেকোনো সিদ্ধান্তের আগে নিজস্ব গবেষণা ও পেশাদার পরামর্শ বিবেচনা করুন।", whatMarket:"শেয়ার বাজার কী?", whatMarketText:"শেয়ারবাজার এমন একটি নিয়ন্ত্রিত বাজার যেখানে বিনিয়োগকারীরা তালিকাভুক্ত কোম্পানির শেয়ার ও অন্যান্য সিকিউরিটিজ কেনাবেচা করেন। মূল্য সরবরাহ, চাহিদা ও বিভিন্ন তথ্যের দ্বারা প্রভাবিত হতে পারে।", whatShare:"শেয়ার কী?", whatShareText:"একটি শেয়ার কোনো কোম্পানির মালিকানার ক্ষুদ্র অংশ নির্দেশ করে। শেয়ারধারীর অধিকার ও সম্ভাব্য সুবিধা কোম্পানির ধরন এবং প্রযোজ্য নিয়মের ওপর নির্ভর করে।", whatBo:"BO অ্যাকাউন্ট কী?", whatBoText:"Beneficiary Owner (BO) অ্যাকাউন্টে ইলেকট্রনিকভাবে সিকিউরিটিজ রাখা হয়। অনুমোদিত ডিপোজিটরি পার্টিসিপ্যান্ট বা ব্রোকারের মাধ্যমে খোলা ও পরিচালিত হয়।", whatDividend:"ডিভিডেন্ড কী?", whatDividendText:"কোম্পানি মুনাফা বা সঞ্চিত আয়ের অংশ শেয়ারধারীদের বিতরণের সিদ্ধান্ত নিতে পারে। নগদ বা বোনাস শেয়ারে ডিভিডেন্ড দেওয়া হতে পারে; এটি নিশ্চিত নয়।", whatEps:"EPS ও NAV কী?", whatEpsText:"EPS হলো প্রতি শেয়ারে আয়ের একটি পরিমাপ। NAV বা NAVPS কোম্পানির নিট সম্পদের হিসাবভিত্তিক ধারণা দেয়। হিসাবপদ্ধতি ও সময়কাল যাচাই করে তুলনা করা জরুরি।", whatPe:"P/E ও বাজার মূলধন", whatPeText:"P/E অনুপাত শেয়ারদরকে শেয়ারপ্রতি আয়ের সঙ্গে তুলনা করে। বাজার মূলধন সাধারণত শেয়ারের বাজারদর ও প্রচলিত শেয়ারের সংখ্যার গুণফল; এগুলো একা বিনিয়োগ সিদ্ধান্ত নির্ধারণ করে না।", analysisEyebrow:"বিশ্লেষণের ভিত্তি", analysisTitle:"দেখুন দুই দৃষ্টিকোণ থেকে", analysisIntro:"চার্টের সংকেত বা আর্থিক অনুপাত কোনোটি একা ভবিষ্যৎ ফল নিশ্চিত করে না।", riskReminder:"ঝুঁকির কথা মনে রাখুন", technical:"প্রযুক্তিগত বিশ্লেষণ", technicalTitle:"দাম ও ট্রেন্ড পড়ুন", technicalText:"ক্যান্ডেলস্টিক, সাপোর্ট-রেজিস্ট্যান্স, মুভিং অ্যাভারেজ, RSI, MACD, Bollinger Bands, ট্রেডিং ভলিউম ও ট্রেন্ড বিশ্লেষণ অতীতের মূল্যচিত্র বোঝার শিক্ষামূলক উপকরণ। এগুলো নিশ্চিত পূর্বাভাস নয়।", fundamental:"মৌলিক বিশ্লেষণ", fundamentalTitle:"ব্যবসার ভিত বুঝুন", fundamentalText:"আয়, নিট মুনাফা, EPS, NAVPS, P/E, ঋণ-ইকুইটি অনুপাত, ডিভিডেন্ড ইল্ড ও ব্যবসার প্রবৃদ্ধি যাচাই করতে নিরীক্ষিত আর্থিক বিবরণী, ব্যবস্থাপনা প্রতিবেদন এবং শিল্প-প্রেক্ষাপট একসঙ্গে বিবেচনা করুন।", financials:"আর্থিক বিবরণী", dividendEyebrow:"কোম্পানি ঘোষণা", dividendTitle:"ডিভিডেন্ডের তথ্য যাচাই করুন", dividendIntro:"নগদ ও বোনাস ডিভিডেন্ড, রেকর্ড তারিখ এবং AGM তারিখ কোম্পানির প্রকাশনা ও এক্সচেঞ্জের ঘোষণায় যাচাই করা উচিত। এখানে যাচাইকৃত ডেটা ফিড নেই, তাই কোনো কোম্পানি-ভিত্তিক তারিখ বা ডিভিডেন্ড হার দেখানো হচ্ছে না।", officialAnnouncements:"অফিসিয়াল ঘোষণা দেখুন", verifyBeforeAct:"সিদ্ধান্তের আগে মিলিয়ে নিন", fyLabel:"আর্থিক বছর ও ঘোষণা প্রকাশের তারিখ", recordDateLabel:"রেকর্ড তারিখ, AGM এবং যোগ্যতার শর্ত", dividendTypeLabel:"নগদ/বোনাসের ধরন ও অনুমোদনের অবস্থা", dividendYieldLabel:"ডিভিডেন্ড ইল্ডের হিসাব ও বাজারদরের তারিখ", investorEyebrow:"বিনিয়োগকারীর পথনির্দেশ", investorTitle:"শুরু করুন সচেতনভাবে", investorIntro:"পুঁজিবাজারে অংশ নেওয়ার আগে প্রক্রিয়া, খরচ এবং ঝুঁকি বুঝে নিন।", guideBo:"BO অ্যাকাউন্ট খুলুন", guideBoText:"অনুমোদিত ব্রোকার বা ডিপোজিটরি পার্টিসিপ্যান্টের শর্ত, প্রয়োজনীয় কাগজপত্র, ফি ও সেবা যাচাই করে অ্যাকাউন্ট খুলুন।", guideBroker:"ব্রোকার বাছুন", guideBrokerText:"লাইসেন্স, ফি-তালিকা, গ্রাহকসেবা, অর্ডার ব্যবস্থা এবং নিরাপত্তা-নীতি যাচাই করুন। কাউকে পাসওয়ার্ড বা OTP দেবেন না।", guideTrade:"লেনদেনের ধাপ জানুন", guideTradeText:"ব্রোকারের নির্ধারিত চ্যানেলে কেনা-বেচার অর্ডার দিন। অর্ডার, নিষ্পত্তি, কনফার্মেশন ও স্টেটমেন্ট নিয়মিত মিলিয়ে নিন।", guideCharges:"চার্জ আগে বুঝুন", guideChargesText:"ব্রোকারেজ, প্রযোজ্য কর/ফি এবং অন্যান্য চার্জ প্রতিষ্ঠান ও নিয়ম অনুযায়ী যাচাই করুন। পুরোনো হার ধরে নেবেন না।", guideRisk:"ঝুঁকি সামলান", guideRiskText:"নিজের সামর্থ্য অনুযায়ী বিনিয়োগ, বৈচিত্র্য, সময়সীমা ও জরুরি তহবিল বিবেচনা করুন। ধার করা অর্থে বিনিয়োগের ঝুঁকি বুঝুন।", guideMistakes:"সাধারণ ভুল এড়ান", guideMistakesText:"গুজব, নিশ্চিত লাভের প্রতিশ্রুতি, এক শেয়ারে অতিরিক্ত নির্ভরতা এবং যাচাই ছাড়া সিদ্ধান্ত থেকে বিরত থাকুন।", calendarEyebrow:"তারিখের পরিকল্পনা", calendarTitle:"বাজার ক্যালেন্ডার", calendarIntro:"ট্রেডিং ছুটি, IPO, AGM, রেকর্ড তারিখ এবং আর্থিক প্রতিবেদন দাখিলের তারিখ পরিবর্তনশীল। যাচাইকৃত ক্যালেন্ডার ফিড সংযুক্ত না থাকায় কোনো তারিখ এখানে অনুমান করে দেখানো হয়নি।", checkCalendar:"এক্সচেঞ্জের ক্যালেন্ডার দেখুন", calendarUnavailable:"যাচাইকৃত তারিখ উপলভ্য নয়", calendarSource:"তারিখ নিশ্চিত করতে DSE, CSE ও কোম্পানির অফিসিয়াল ঘোষণা দেখুন।", faqEyebrow:"আপনার প্রশ্ন", faqTitle:"সাধারণ জিজ্ঞাসা", faqIntro:"নতুন বিনিয়োগকারীদের জন্য কয়েকটি প্রাথমিক প্রশ্নের সহজ উত্তর।", faqDisclaimer:"এগুলো সাধারণ শিক্ষামূলক তথ্য; ব্যক্তিগত আর্থিক পরামর্শ নয়।", faqQ1:"বাংলাদেশের শেয়ার বাজার কী?", faqA1:"এটি একটি নিয়ন্ত্রিত পুঁজিবাজার যেখানে DSE ও CSE-তে তালিকাভুক্ত সিকিউরিটিজ লেনদেন হয়। নিয়ম ও বিনিয়োগকারী নির্দেশনার জন্য BSEC এবং এক্সচেঞ্জের অফিসিয়াল তথ্য দেখুন।", faqQ2:"আমি কীভাবে বিনিয়োগ শুরু করব?", faqA2:"প্রথমে বাজার ও ঝুঁকি সম্পর্কে শিখুন, অনুমোদিত ব্রোকারের মাধ্যমে BO অ্যাকাউন্ট খোলার প্রক্রিয়া জানুন এবং কোম্পানি-তথ্য নিজে যাচাই করুন।", faqQ3:"BO অ্যাকাউন্ট কেন দরকার?", faqA3:"ইলেকট্রনিক আকারে সিকিউরিটিজ রাখার জন্য BO অ্যাকাউন্ট ব্যবহৃত হয়। বিস্তারিত শর্ত অনুমোদিত ডিপোজিটরি পার্টিসিপ্যান্টের কাছে নিশ্চিত করুন।", faqQ4:"DSE ও CSE কী?", faqA4:"ঢাকা স্টক এক্সচেঞ্জ ও চট্টগ্রাম স্টক এক্সচেঞ্জ বাংলাদেশের দুই স্টক এক্সচেঞ্জ। বাজার পরিচালনা ও তালিকাভুক্ত সিকিউরিটিজের তথ্য তাদের অফিসিয়াল সাইটে পাওয়া যায়।", faqQ5:"IPO কী?", faqA5:"IPO হলো কোনো প্রতিষ্ঠানের প্রথমবার জনসাধারণের কাছে শেয়ার ইস্যু। প্রসপেক্টাস, যোগ্যতা, আবেদন ও সময়সীমা কেবল যাচাইকৃত বিজ্ঞপ্তি থেকে জানুন।", faqQ6:"ডিভিডেন্ড কীভাবে দেওয়া হয়?", faqA6:"কোম্পানি প্রযোজ্য নিয়ম মেনে নগদ বা বোনাস ডিভিডেন্ড ঘোষণা করতে পারে। ঘোষণা, রেকর্ড তারিখ ও যোগ্যতা কোম্পানি/এক্সচেঞ্জ থেকে যাচাই করুন; ডিভিডেন্ড নিশ্চিত নয়।", faqQ7:"শেয়ারে বিনিয়োগের ঝুঁকি কী?", faqA7:"দর কমে মূলধন ক্ষতি, তারল্য, কোম্পানি ও বাজারের ঝুঁকি থাকতে পারে। অতীতের ফল ভবিষ্যৎ ফলের নিশ্চয়তা দেয় না।", contactEyebrow:"যোগাযোগ রাখুন", contactTitle:"আপনার মতামত<br>আমাদের জানান", contactIntro:"প্রশ্ন বা সাইট-সংক্রান্ত মতামত পাঠান। এই ডেমো ফর্মটি কোনো সার্ভারে তথ্য পাঠায় না।", emailPlaceholder:"ইমেইল", placeholderContact:"উদাহরণ ঠিকানা—বাস্তব যোগাযোগের তথ্য নয়", nameLabel:"আপনার নাম", emailLabel:"ইমেইল ঠিকানা", namePlaceholder:"নাম লিখুন", emailInputPlaceholder:"you@example.com", subjectLabel:"বিষয়", subjectPlaceholder:"বার্তার বিষয়", messageLabel:"বার্তা", messagePlaceholder:"আপনার বার্তা লিখুন", sendMessage:"বার্তা পাঠান", formDemoNote:"ডেমো: বার্তা পাঠানো হয় না; ফর্ম যাচাই দেখানো হয় মাত্র।", disclaimerTitle:"গুরুত্বপূর্ণ আর্থিক সতর্কতা", disclaimerText:"এই ওয়েবসাইটের বিষয়বস্তু কেবল শিক্ষামূলক ও তথ্যগত উদ্দেশ্যে। শেয়ারবাজারে বিনিয়োগ ঝুঁকিপূর্ণ; মূলধনের ক্ষতি হতে পারে। অতীতের ফল ভবিষ্যৎ ফলের নিশ্চয়তা দেয় না। বিনিয়োগের আগে কোম্পানি ও তথ্যের উৎস যাচাই করুন। এখানে নিশ্চিত মুনাফার প্রতিশ্রুতি বা ব্যক্তিগত বিনিয়োগ পরামর্শ দেওয়া হয় না। বাজারতথ্যের ক্ষেত্রে নির্ভরযোগ্য উৎস ও হালনাগাদের সময় যাচাই করা জরুরি।", footerAbout:"বাংলাদেশের শেয়ার বাজার সম্পর্কে শেখা ও তথ্য যাচাইয়ের একটি স্বাধীন শিক্ষামূলক উদ্যোগ।", quickLinks:"দ্রুত লিংক", navCompanies:"কোম্পানি", resources:"সম্পদ", navFaq:"সাধারণ প্রশ্ন", officialLinks:"অফিসিয়াল উৎস", rights:"সর্বস্বত্ব সংরক্ষিত।", footerSample:"নমুনা ডেটা · লাইভ বাজার ফিড সংযুক্ত নয়", page:"পৃষ্ঠা", of:"এর", chartRangeLabel:"সময়সীমা পরিবর্তিত হয়েছে", volumeLabel:"ভলিউম", lineLabel:"সূচক"
  },
  en: {
    skip:"Skip to main content", marketStatus:"Market status: Demo", dataNotice:"Sample data — not live market prices", brand:"Share Market", navMarket:"Market", navStocks:"Stocks", navExchanges:"Exchanges", navNews:"News", navLearn:"Learn", navInvestor:"Investor guide", heroEyebrow:"Bangladesh investing", heroTitle:"Your complete Bangladesh<br><em>share market</em> information platform", heroLead:"Learn about the market, verify information, and make your own decisions—in plain language, on an educational platform.", exploreMarket:"Explore market", startLearning:"Start learning", heroNote:"Built for learning and information · Not investment advice", marketSnapshot:"Illustrative market snapshot", sample:"SAMPLE", illustrationOnly:"Illustrative chart only", sampleData:"SAMPLE DATA", marketLearning:"Market education", informedInvesting:"Invest informed", trustedSources:"Data verification", sourceFirst:"Sources come first", trustIntro:"Verify market information", marketSectionEyebrow:"Market at a glance", marketTitle:"Market overview", marketIntro:"Every figure below is for interface demonstration only—not actual market information.", dseBroad:"DSE Broad Index", blueChip:"30 selected companies", shariahIndex:"Shariah index", cseIndex:"CSE selected index", turnover:"Total turnover", marketCap:"Market capitalization", advancers:"Advancers", decliners:"Decliners", unchanged:"Unchanged", sampleDisclaimer:"All market statistics are fictional samples; no live API is connected.", exchangeEyebrow:"Bangladesh capital market", exchangeTitle:"Two exchanges, one market", exchangeIntro:"Learn about the country's two stock exchanges and verify information on their official channels.", dseTitle:"Dhaka Stock Exchange", dseDescription:"The Dhaka Stock Exchange is Bangladesh's principal stock exchange. It operates a regulated platform for organized trading of listed securities, market information and investor participation. Refer to DSE's official website for current history and operational information.", cseTitle:"Chittagong Stock Exchange", cseDescription:"The Chittagong Stock Exchange is the country's second stock exchange. It contributes to Bangladesh's capital market through technology-enabled trading and opportunities for market participation. Verify listing, market operation and investor information on CSE's official website.", visitOfficial:"Visit official source", stocksEyebrow:"Find a stock", stocksTitle:"Stock market data", stocksIntro:"Search by code, company or sector, sort columns, and explore this sample list.", searchPlaceholder:"Search company or code", sector:"Sector", allSectors:"All sectors", sortHint:"Click a column heading to sort", company:"Company", code:"Code", lastPrice:"Last price", change:"Change", changePct:"Change %", volume:"Volume", value:"Traded value", noResults:"No matching results.", updatedSample:"Sample · Update: not real time", results:"sample companies", marketPulse:"Market pulse", moversTitle:"Market movers", topGainers:"Top gainers", topLosers:"Top losers", mostTraded:"Most traded", shares:"shares", directoryEyebrow:"Company directory", directoryTitle:"Many sectors,<br>many possibilities", directoryIntro:"This introductory directory helps explore listed companies and sectors. Descriptions are educational, not investment recommendations. Verify company reports and current information through exchange or company publications.", browseDirectory:"Browse listings", banking:"Banking", pharma:"Pharmaceuticals", textile:"Textiles", engineering:"Engineering", insurance:"Insurance", energy:"Energy", food:"Food & allied", it:"Information technology", moreSectors:"More sectors", profileEyebrow:"Company profile example", gpDescription:"Grameenphone is a recognized company in Bangladesh's telecommunications sector. This sample profile only illustrates how information might be organized; none of the financial metrics shown here are current or verified.", industry:"Industry", telecom:"Telecommunications", marketPrice:"Market price", eps:"Earnings per share (EPS)", navps:"Net asset value per share (NAVPS)", peRatio:"P/E ratio", profileSource:"Financial data is not provided—refer to the company's latest audited report and DSE/CSE disclosures.", dividendHistory:"Dividend history & financial reports", verifyDse:"Verify on DSE", chartEyebrow:"Chart lab", chartTitle:"The market's movement,<br>your perspective", chartIntro:"This interactive chart is an illustrative demo only. Identify an authorized data provider and source before connecting actual price history.", chartRange:"Time range", range1d:"1 day", range1w:"1 week", range1m:"1 month", range1y:"1 year", lineChart:"Line", volumeChart:"Volume", chartSource:"Source: not connected · Demo data", newsEyebrow:"Stay informed", newsTitle:"Market news & announcements", newsIntro:"No verified live news feed is connected. The links below are official sources—no fictional news is displayed here.", officialSources:"Official sources", dseAnnouncements:"Company disclosures & market data", dseSourceDescription:"Verify prices, trading information and listed-company disclosures directly with DSE.", cseAnnouncements:"Market operations & announcements", cseSourceDescription:"Explore CSE market data, company announcements and investor guidance.", bsecAnnouncements:"Regulator announcements", bsecSourceDescription:"Verify guidance and notices from the Bangladesh Securities and Exchange Commission.", economicUpdates:"Economic updates & Bangladesh Bank", bbSourceDescription:"Refer to Bangladesh Bank for monetary policy and macroeconomic publications.", noNewsFeed:"Connect a verified news provider before displaying live news. IPO, dividend and economic updates also require a cited source.", ipoEyebrow:"For new investors", ipoTitle:"How does an IPO work?", ipoIntro:"An Initial Public Offering (IPO) is when a company offers shares to the public for the first time. Application, eligibility, deadlines and allotment rules in Bangladesh vary by issue and regulatory notice.", ipoStep1:"Read verified BSEC and exchange notices", ipoStep2:"Check eligibility and the prospectus", ipoStep3:"Apply through an authorized channel", ipoStep4:"Check allotment and refund information officially", checkIpo:"Verify IPO information at BSEC", noIpoDates:"No verified upcoming IPO dates are connected; no dates have been invented.", learnEyebrow:"Learning made simple", learnTitle:"Understand investing, step by step", learnIntro:"Learn core stock-market concepts. Do your own research and consider professional advice before making decisions.", whatMarket:"What is the stock market?", whatMarketText:"A stock market is a regulated marketplace where investors buy and sell shares and other securities of listed companies. Prices may be influenced by supply, demand and many kinds of information.", whatShare:"What is a share?", whatShareText:"A share represents a small ownership interest in a company. Shareholder rights and possible benefits depend on the company and applicable rules.", whatBo:"What is a BO account?", whatBoText:"A Beneficiary Owner (BO) account holds securities electronically. It is opened and maintained through an authorized Depository Participant or broker.", whatDividend:"What is a dividend?", whatDividendText:"A company may decide to distribute some profits or retained earnings to shareholders. A dividend can be cash or bonus shares; it is not guaranteed.", whatEps:"What are EPS and NAV?", whatEpsText:"EPS measures earnings per share. NAV or NAVPS provides an accounting-based view of a company's net assets. Check calculation methods and reporting periods when comparing.", whatPe:"P/E & market capitalization", whatPeText:"The P/E ratio compares a share price with earnings per share. Market capitalization is generally the market price multiplied by outstanding shares; neither metric alone determines an investment decision.", analysisEyebrow:"Analysis essentials", analysisTitle:"See it from two angles", analysisIntro:"No chart signal or financial ratio by itself can guarantee future performance.", riskReminder:"Remember the risks", technical:"Technical analysis", technicalTitle:"Read price and trends", technicalText:"Candlesticks, support and resistance, moving averages, RSI, MACD, Bollinger Bands, trading volume and trend analysis are educational tools for studying historical price action. They are not certain predictions.", fundamental:"Fundamental analysis", fundamentalTitle:"Understand the business", fundamentalText:"To assess revenue, net profit, EPS, NAVPS, P/E, debt-to-equity, dividend yield and growth, consider audited statements, management reports and industry context together.", financials:"Financial statements", dividendEyebrow:"Company disclosures", dividendTitle:"Verify dividend information", dividendIntro:"Cash and stock dividends, record dates and AGM dates should be checked against company publications and exchange announcements. No verified data feed is connected, so company-specific dates and dividend rates are not shown.", officialAnnouncements:"View official announcements", verifyBeforeAct:"Check before you act", fyLabel:"Financial year and announcement date", recordDateLabel:"Record date, AGM and eligibility terms", dividendTypeLabel:"Cash/stock type and approval status", dividendYieldLabel:"Dividend-yield calculation and price date", investorEyebrow:"Investor roadmap", investorTitle:"Start with awareness", investorIntro:"Understand the process, costs and risks before participating in the capital market.", guideBo:"Open a BO account", guideBoText:"Review the terms, documents, fees and services of an authorized broker or Depository Participant before opening an account.", guideBroker:"Choose a broker", guideBrokerText:"Check licensing, fee schedules, customer support, order systems and security policies. Never share your password or OTP.", guideTrade:"Understand trading", guideTradeText:"Place buy or sell orders through your broker's designated channel. Reconcile orders, settlement, confirmations and statements regularly.", guideCharges:"Understand charges first", guideChargesText:"Check brokerage, applicable taxes/fees and other charges with the provider and current rules. Do not rely on outdated rates.", guideRisk:"Manage risk", guideRiskText:"Consider affordability, diversification, time horizon and emergency savings. Understand the risks of investing with borrowed money.", guideMistakes:"Avoid common mistakes", guideMistakesText:"Avoid rumors, guaranteed-profit claims, overconcentration in one stock and decisions made without verification.", calendarEyebrow:"Plan important dates", calendarTitle:"Market calendar", calendarIntro:"Trading holidays, IPOs, AGMs, record dates and financial filing deadlines can change. No verified calendar feed is connected, so no dates are guessed here.", checkCalendar:"Check exchange calendars", calendarUnavailable:"No verified dates available", calendarSource:"Confirm dates with official DSE, CSE and company announcements.", faqEyebrow:"Your questions", faqTitle:"Frequently asked questions", faqIntro:"Simple answers to some introductory questions for new investors.", faqDisclaimer:"General educational information only; not personal financial advice.", faqQ1:"What is the Bangladesh share market?", faqA1:"It is a regulated capital market where securities listed on DSE and CSE are traded. Consult official BSEC and exchange resources for rules and investor guidance.", faqQ2:"How can I start investing?", faqA2:"First learn about the market and its risks, understand how to open a BO account through an authorized broker, and verify company information yourself.", faqQ3:"Why do I need a BO account?", faqA3:"A BO account is used to hold securities electronically. Confirm detailed requirements with an authorized Depository Participant.", faqQ4:"What are DSE and CSE?", faqA4:"The Dhaka Stock Exchange and Chittagong Stock Exchange are Bangladesh's two stock exchanges. Their official websites provide market operation and listed-security information.", faqQ5:"What is an IPO?", faqA5:"An IPO is a company's first issuance of shares to the public. Check prospectuses, eligibility, application requirements and deadlines only in verified notices.", faqQ6:"How are dividends paid?", faqA6:"A company may announce cash or bonus dividends under applicable rules. Verify announcements, record dates and eligibility with the company/exchange; dividends are not guaranteed.", faqQ7:"What are the risks of investing in shares?", faqA7:"Risks include loss of capital from price declines, liquidity, company-specific and market risks. Past performance does not guarantee future results.", contactEyebrow:"Get in touch", contactTitle:"We'd love to<br>hear from you", contactIntro:"Send a question or feedback about the site. This demo form does not send data to a server.", emailPlaceholder:"Email", placeholderContact:"Example address—not real contact information", nameLabel:"Your name", emailLabel:"Email address", namePlaceholder:"Enter your name", emailInputPlaceholder:"you@example.com", subjectLabel:"Subject", subjectPlaceholder:"Message subject", messageLabel:"Message", messagePlaceholder:"Write your message", sendMessage:"Send message", formDemoNote:"Demo: no message is sent; this form only demonstrates validation.", disclaimerTitle:"Important financial disclaimer", disclaimerText:"This website is for educational and informational purposes only. Investing in the stock market involves risk, including loss of capital. Past performance does not guarantee future results. Verify companies and information sources before investing. No guaranteed profits or personalized investment advice are offered here. Always check the reliable source and timestamp for market information.", footerAbout:"An independent educational initiative to learn about and verify information on Bangladesh's share market.", quickLinks:"Quick links", navCompanies:"Companies", resources:"Resources", navFaq:"FAQs", officialLinks:"Official sources", rights:"All rights reserved.", footerSample:"Sample data · No live market feed connected", page:"Page", of:"of", chartRangeLabel:"Time range changed", volumeLabel:"Volume", lineLabel:"Index"
  }
};

Object.assign(translations.bn, {
  notLive: "লাইভ নয়",
  loadingData: "ডেটা লোড হচ্ছে…",
  liveStockFeed: "শেয়ারের লাইভ ফিড",
  providerError: "ডেটা সরবরাহকারী থেকে আপডেট পাওয়া যায়নি",
  sectorBanking: "ব্যাংক",
  sectorPharma: "ওষুধ ও রসায়ন",
  sectorTextiles: "বস্ত্র",
  sectorEngineering: "প্রকৌশল",
  sectorFood: "খাদ্য ও সংশ্লিষ্ট",
  sectorTelecom: "টেলিযোগাযোগ",
  sectorTravel: "ভ্রমণ ও অবকাশ",
  shares: "শেয়ার",
  dseOperations: "DSE-এর ইলেকট্রনিক ট্রেডিং ব্যবস্থা, সূচক, তালিকাভুক্ত কোম্পানি ও দৈনিক ট্রেডিং সেশনের সর্বশেষ সময়সূচি অফিসিয়াল সাইটে যাচাই করুন।",
  cseOperations: "CSE-এর বাজার পরিচালনা, লেনদেন ব্যবস্থা, কোম্পানি তালিকা ও ট্রেডিং সেশনের বর্তমান সময়সূচি এক্সচেঞ্জের ওয়েবসাইটে দেখুন।",
  candleChart: "ক্যান্ডেল",
  telecomSector: "টেলিযোগাযোগ",
  financeSector: "আর্থিক প্রতিষ্ঠান",
  cementSector: "সিমেন্ট",
  miscSector: "বিবিধ",
  lakh: "লাখ",
  companyWebsite: "কোম্পানির ওয়েবসাইট",
  navAria: "প্রধান নেভিগেশন",
  homeAria: "বাংলাদেশ শেয়ার বাজারের হোম",
  menuAria: "মেনু খুলুন",
  themeAria: "রঙের থিম পরিবর্তন করুন",
  heroChartAlt: "শুধু দৃষ্টান্তমূলক বাজার চার্ট",
  marketChartAlt: "DSEX-এর দৃষ্টান্তমূলক চার্ট",
  previousPage: "আগের পৃষ্ঠা",
  nextPage: "পরের পৃষ্ঠা",
  chartType: "চার্টের ধরন",
  backTop: "উপরে যান",
  previousClose: "আগের সমাপনী",
  sampleSourceTime: "উৎস: প্রদর্শনী নমুনা · হালনাগাদ: লাইভ নয়"
});
Object.assign(translations.en, {
  notLive: "Not live",
  loadingData: "Loading data…",
  liveStockFeed: "Live stock feed",
  providerError: "Could not update from data provider",
  sectorBanking: "Banking",
  sectorPharma: "Pharmaceuticals",
  sectorTextiles: "Textiles",
  sectorEngineering: "Engineering",
  sectorFood: "Food & Allied",
  sectorTelecom: "Telecommunications",
  sectorTravel: "Travel & Leisure",
  shares: "shares",
  dseOperations: "Check DSE's official site for its electronic trading system, indices, listed companies and the latest daily trading-session schedule.",
  cseOperations: "Visit CSE's website for its market operations, trading system, company listings and current session schedule.",
  candleChart: "Candlestick",
  telecomSector: "Telecommunications",
  financeSector: "Financial institutions",
  cementSector: "Cement",
  miscSector: "Miscellaneous",
  lakh: "lakh",
  companyWebsite: "Company website",
  navAria: "Main navigation",
  homeAria: "Bangladesh Share Market home",
  menuAria: "Open menu",
  themeAria: "Toggle color theme",
  heroChartAlt: "Illustrative market chart only",
  marketChartAlt: "Illustrative DSEX chart",
  previousPage: "Previous page",
  nextPage: "Next page",
  chartType: "Chart type",
  backTop: "Back to top",
  previousClose: "Previous close",
  sampleSourceTime: "Source: illustrative sample · Updated: not live"
});

const stockData = [
  { name: "Grameenphone", code: "GP", sector: "Telecommunications", price: 286.50, change: -6.25, percent: -2.14, volume: 421803, value: 121.4 },
  { name: "Square Pharmaceuticals", code: "SQURPHARMA", sector: "Pharmaceuticals", price: 218.40, change: 1.80, percent: 0.83, volume: 538142, value: 117.2 },
  { name: "Beximco Pharmaceuticals", code: "BXPHARMA", sector: "Pharmaceuticals", price: 112.70, change: 2.30, percent: 2.08, volume: 694885, value: 78.3 },
  { name: "BRAC Bank", code: "BRACBANK", sector: "Banking", price: 58.90, change: 0.70, percent: 1.20, volume: 801540, value: 47.1 },
  { name: "Eastern Bank", code: "EBL", sector: "Banking", price: 31.60, change: 0.20, percent: 0.64, volume: 389102, value: 12.2 },
  { name: "Renata PLC", code: "RENATA", sector: "Pharmaceuticals", price: 472.00, change: -8.00, percent: -1.67, volume: 95318, value: 45.6 },
  { name: "Square Textiles", code: "SQURTEXT", sector: "Textiles", price: 43.20, change: 0.50, percent: 1.17, volume: 251604, value: 10.8 },
  { name: "Olympic Industries", code: "OLYMPIC", sector: "Food & Allied", price: 154.20, change: 5.55, percent: 3.72, volume: 310287, value: 47.7 },
  { name: "IFIC Bank", code: "IFIC", sector: "Banking", price: 11.80, change: -0.40, percent: -3.28, volume: 741902, value: 8.9 },
  { name: "Acme Laboratories", code: "ACMEPL", sector: "Pharmaceuticals", price: 92.40, change: 4.60, percent: 5.25, volume: 476120, value: 43.2 },
  { name: "Bangladesh Steel Re-Rolling Mills", code: "BSRMLTD", sector: "Engineering", price: 108.60, change: 4.35, percent: 4.18, volume: 1562491, value: 168.2 },
  { name: "Sea Pearl Beach Resort", code: "SEAPEARL", sector: "Travel & Leisure", price: 77.80, change: 1.10, percent: 1.43, volume: 1309915, value: 101.9 }
].map((stock) => ({ ...stock, sample: true }));

const state = { language: "bn", page: 1, pageSize: 6, sort: "code", direction: 1, sector: "all", query: "", chart: "line", range: "1D", feedMode: "sample", feedSource: "", feedTimestamp: "" };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const text = (key) => translations[state.language][key] || translations.en[key] || key;

function setLanguage(language) {
  state.language = translations[language] ? language : "bn";
  document.documentElement.lang = state.language;
  document.body.lang = state.language;
  document.title = state.language === "bn"
    ? "বাংলাদেশ শেয়ার বাজার | Bangladesh Share Market"
    : "Bangladesh Share Market | Bangladesh Stock Market Information";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = state.language === "bn"
    ? "বাংলাদেশের শেয়ার বাজার, বিনিয়োগ শিক্ষা এবং DSE ও CSE সম্পর্কে দ্বিভাষিক তথ্যভান্ডার।"
    : "Bilingual information about Bangladesh's stock market, investing education, DSE and CSE.";
  $$("[data-i18n]").forEach((element) => {
    const value = text(element.dataset.i18n);
    if (value.includes("<br>") || value.includes("<em>")) element.innerHTML = value;
    else element.textContent = value;
  });
  $$("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = text(element.dataset.i18nPlaceholder);
  });
  $$("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", text(element.dataset.i18nAriaLabel));
  });
  $("#languageToggle").textContent = state.language === "bn" ? "English" : "বাংলা";
  $("#languageToggle").setAttribute("aria-label", state.language === "bn" ? "ইংরেজিতে পরিবর্তন করুন" : "Switch to Bangla");
  localStorage.setItem("bsm-language", state.language);
  populateSectorOptions();
  renderStocks();
  renderFeedStatus();
  drawChart();
}

function sectorLabel(sector) {
  const keys = {
    Banking: "sectorBanking",
    Pharmaceuticals: "sectorPharma",
    Textiles: "sectorTextiles",
    Engineering: "sectorEngineering",
    "Food & Allied": "sectorFood",
    Telecommunications: "sectorTelecom",
    "Travel & Leisure": "sectorTravel"
  };
  return text(keys[sector] || sector);
}

function populateSectorOptions() {
  const select = $("#sectorFilter");
  const current = state.sector;
  const sectors = [...new Set(stockData.map((item) => item.sector))];
  select.innerHTML = `<option value="all">${text("allSectors")}</option>` +
    sectors.map((sector) => `<option value="${escapeHtml(sector)}">${escapeHtml(sectorLabel(sector))}</option>`).join("");
  select.value = sectors.includes(current) ? current : "all";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function filteredStocks() {
  const query = state.query.trim().toLowerCase();
  return stockData.filter((stock) => {
    const matchesText = !query || stock.name.toLowerCase().includes(query) || stock.code.toLowerCase().includes(query);
    const matchesSector = state.sector === "all" || stock.sector === state.sector;
    return matchesText && matchesSector;
  }).sort((a, b) => {
    const left = a[state.sort];
    const right = b[state.sort];
    return (typeof left === "string" ? left.localeCompare(right) : left - right) * state.direction;
  });
}

function renderStocks() {
  const list = filteredStocks();
  const pages = Math.max(1, Math.ceil(list.length / state.pageSize));
  state.page = Math.min(state.page, pages);
  const visible = list.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
  const format = (number, digits = 2) => number.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
  $("#stockRows").innerHTML = visible.map((stock) => {
    const color = stock.change >= 0 ? "positive" : "negative";
    const sign = stock.change >= 0 ? "+" : "−";
    return `<tr>
      <td><span class="stock-name">${escapeHtml(stock.name)}<small>${escapeHtml(sectorLabel(stock.sector))}</small></span></td>
      <td><span class="stock-code">${escapeHtml(stock.code)}</span></td>
      <td>৳ ${format(stock.price)}</td>
      <td class="table-change ${color}">${sign}${format(Math.abs(stock.change))}</td>
      <td class="table-change ${color}">${sign}${format(Math.abs(stock.percent))}%</td>
      <td>${stock.volume.toLocaleString("en-US")}</td>
      <td>৳ ${format(stock.value, 1)} ${text("lakh")}</td>
    </tr>`;
  }).join("");
  $("#emptyState").hidden = list.length !== 0;
  $("#resultCount").textContent = `${list.length} ${text("results")}`;
  $("#pageInfo").textContent = `${text("page")} ${state.page} ${text("of")} ${pages}`;
  $("#prevPage").disabled = state.page <= 1;
  $("#nextPage").disabled = state.page >= pages;
}

function renderFeedStatus() {
  const label = $("#stockDataLabel");
  const source = $("#stockSource");
  const dataNotice = $("#dataNotice");
  if (state.feedMode === "live") {
    label.textContent = `● ${text("liveStockFeed")}`;
    source.replaceChildren();
    const sourceLink = document.createElement("a");
    sourceLink.href = marketDataProvider.sourceUrl;
    sourceLink.target = "_blank";
    sourceLink.rel = "noopener noreferrer";
    sourceLink.textContent = state.feedSource;
    source.append(sourceLink, document.createTextNode(` · ${state.feedTimestamp}`));
    dataNotice.textContent = state.language === "bn"
      ? "সূচক ও চার্ট নমুনা; শেয়ার তালিকা লাইভ"
      : "Sample indices and charts; live stock list";
  } else if (state.feedMode === "loading") {
    label.textContent = `● ${text("loadingData")}`;
    source.textContent = text("loadingData");
  } else if (state.feedMode === "error") {
    label.textContent = `● ${text("providerError")}`;
    source.textContent = text("providerError");
  } else {
    label.textContent = `● ${text("sampleData")}`;
    source.textContent = text("updatedSample");
  }
}

function normalizeProviderResponse(response) {
  if (!response || !Array.isArray(response.stocks) || response.stocks.length === 0) {
    throw new Error("Provider response must include a non-empty stocks array.");
  }
  const required = ["name", "code", "sector", "price", "change", "percent", "volume", "value"];
  const stocks = response.stocks.map((stock) => {
    if (!stock || required.some((key) => stock[key] === undefined || stock[key] === null)) {
      throw new Error("A provider stock record is missing required fields.");
    }
    if (required.slice(3).some((key) => !Number.isFinite(Number(stock[key])))) {
      throw new Error("Provider stock metrics must be finite numbers.");
    }
    return {
      name: String(stock.name),
      code: String(stock.code),
      sector: String(stock.sector),
      price: Number(stock.price),
      change: Number(stock.change),
      percent: Number(stock.percent),
      volume: Number(stock.volume),
      value: Number(stock.value),
      sample: false
    };
  });
  const updatedAt = new Date(response.updatedAt);
  if (!Number.isFinite(updatedAt.getTime())) throw new Error("Provider response must include a valid updatedAt timestamp.");
  return { stocks, updatedAt };
}

async function refreshProviderStocks() {
  if (!marketDataProvider || providerRefreshInFlight) return;
  providerRefreshInFlight = true;
  state.feedMode = "loading";
  renderFeedStatus();
  try {
    const response = await marketDataProvider.loadStocks();
    const normalized = normalizeProviderResponse(response);
    stockData.splice(0, stockData.length, ...normalized.stocks);
    state.feedTimestamp = normalized.updatedAt.toLocaleString(state.language === "bn" ? "bn-BD" : "en-GB", { dateStyle: "medium", timeStyle: "short" });
    state.feedMode = "live";
    state.feedSource = marketDataProvider.sourceName;
    state.page = 1;
    populateSectorOptions();
    renderStocks();
    renderFeedStatus();
  } catch (error) {
    state.feedMode = "error";
    renderFeedStatus();
    console.error("Market data provider update failed:", error);
  } finally {
    providerRefreshInFlight = false;
  }
}

let marketDataProvider = null;
let refreshTimer = null;
let providerRefreshInFlight = false;

const chartSeries = {
  "1D": [38, 46, 41, 52, 48, 62, 56, 68, 61, 76, 70, 83, 75, 90, 85, 98, 91, 108, 101, 118, 112, 129],
  "1W": [42, 48, 44, 58, 52, 61, 55, 74, 69, 77, 72, 91, 84, 98, 92, 111, 104, 119, 113, 127, 122, 139],
  "1M": [36, 44, 40, 51, 47, 57, 53, 70, 65, 73, 68, 86, 81, 95, 90, 108, 101, 117, 110, 125, 120, 139],
  "1Y": [31, 41, 38, 47, 44, 60, 53, 65, 59, 75, 69, 80, 74, 92, 86, 101, 95, 113, 107, 124, 118, 140]
};

function drawChart() {
  const canvas = $("#marketChart");
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  if (!rect.width) return;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);
  const context = canvas.getContext("2d");
  context.scale(ratio, ratio);
  const width = rect.width;
  const height = rect.height;
  const dark = document.body.classList.contains("dark");
  const grid = dark ? "#2a3b47" : "#e9eeef";
  const line = dark ? "#55bd96" : "#16876a";
  const fill = dark ? "rgba(85,189,150,.15)" : "rgba(22,135,106,.12)";
  const values = chartSeries[state.range] || chartSeries["1D"];
  const padding = { top: 13, right: 7, bottom: 12, left: 7 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  context.strokeStyle = grid;
  context.lineWidth = 1;
  for (let row = 0; row < 4; row += 1) {
    const y = padding.top + plotHeight * row / 3;
    context.beginPath();
    context.moveTo(padding.left, y);
    context.lineTo(width - padding.right, y);
    context.stroke();
  }
  if (state.chart === "volume") {
    const max = Math.max(...values);
    values.forEach((value, index) => {
      const barWidth = Math.max(2, plotWidth / values.length * .48);
      const barHeight = (value / max) * plotHeight * .74;
      const x = padding.left + index / (values.length - 1) * plotWidth;
      context.fillStyle = index % 4 === 0 ? line : `${line}77`;
      context.fillRect(x - barWidth / 2, height - padding.bottom - barHeight, barWidth, barHeight);
    });
    return;
  }
  if (state.chart === "candle") {
    const minimum = Math.min(...values) - 8;
    const maximum = Math.max(...values) + 8;
    const toY = (value) => padding.top + (1 - (value - minimum) / (maximum - minimum)) * plotHeight;
    const candleWidth = Math.max(2, plotWidth / values.length * .48);
    values.forEach((value, index) => {
      const previous = values[Math.max(0, index - 1)];
      const open = index % 2 === 0 ? previous : previous + 5;
      const close = index % 2 === 0 ? value + 4 : value;
      const high = Math.max(open, close) + 4;
      const low = Math.min(open, close) - 4;
      const x = padding.left + index / (values.length - 1) * plotWidth;
      const rising = close >= open;
      context.strokeStyle = rising ? line : (dark ? "#ee8987" : "#d45e61");
      context.fillStyle = context.strokeStyle;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(x, toY(high));
      context.lineTo(x, toY(low));
      context.stroke();
      const top = Math.min(toY(open), toY(close));
      const bodyHeight = Math.max(2, Math.abs(toY(close) - toY(open)));
      context.fillRect(x - candleWidth / 2, top, candleWidth, bodyHeight);
    });
    return;
  }
  const minimum = Math.min(...values) - 8;
  const maximum = Math.max(...values) + 8;
  const point = (index) => ({
    x: padding.left + index / (values.length - 1) * plotWidth,
    y: padding.top + (1 - (values[index] - minimum) / (maximum - minimum)) * plotHeight
  });
  context.beginPath();
  values.forEach((_, index) => {
    const p = point(index);
    if (index === 0) context.moveTo(p.x, p.y);
    else context.lineTo(p.x, p.y);
  });
  const last = point(values.length - 1);
  const first = point(0);
  context.lineTo(last.x, height - padding.bottom);
  context.lineTo(first.x, height - padding.bottom);
  context.closePath();
  context.fillStyle = fill;
  context.fill();
  context.beginPath();
  values.forEach((_, index) => {
    const p = point(index);
    if (index === 0) context.moveTo(p.x, p.y);
    else context.lineTo(p.x, p.y);
  });
  context.strokeStyle = line;
  context.lineWidth = 2.5;
  context.lineJoin = "round";
  context.stroke();
  context.beginPath();
  context.arc(last.x, last.y, 3.5, 0, Math.PI * 2);
  context.fillStyle = line;
  context.fill();
}

function initialize() {
  $("#year").textContent = new Date().getFullYear();
  const savedLanguage = localStorage.getItem("bsm-language");
  const savedTheme = localStorage.getItem("bsm-theme");
  if (savedTheme === "dark") document.body.classList.add("dark");
  $("#themeToggle").textContent = savedTheme === "dark" ? "☾" : "☼";
  populateSectorOptions();
  renderStocks();
  setLanguage(translations[savedLanguage] ? savedLanguage : "bn");

  $("#languageToggle").addEventListener("click", () => setLanguage(state.language === "bn" ? "en" : "bn"));
  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    localStorage.setItem("bsm-theme", dark ? "dark" : "light");
    $("#themeToggle").textContent = dark ? "☾" : "☼";
    drawChart();
  });
  $("#menuToggle").addEventListener("click", () => {
    const expanded = $("#menuToggle").getAttribute("aria-expanded") === "true";
    $("#menuToggle").setAttribute("aria-expanded", String(!expanded));
    $("#navLinks").classList.toggle("open", !expanded);
  });
  $$("#navLinks a").forEach((link) => link.addEventListener("click", () => {
    $("#navLinks").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }));
  $$("img[data-image]").forEach((image) => {
    const imageName = image.dataset.image;
    image.src = websiteImages[imageName] || websiteImages.fallback;
    image.addEventListener("error", () => {
      if (!image.src.endsWith(websiteImages.fallback)) image.src = websiteImages.fallback;
    }, { once: true });
  });
  $("#stockSearch").addEventListener("input", (event) => {
    state.query = event.target.value;
    state.page = 1;
    renderStocks();
  });
  $("#sectorFilter").addEventListener("change", (event) => {
    state.sector = event.target.value;
    state.page = 1;
    renderStocks();
  });
  $$("[data-sort]").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.sort;
    state.direction = state.sort === key ? state.direction * -1 : 1;
    state.sort = key;
    renderStocks();
  }));
  $("#prevPage").addEventListener("click", () => { state.page -= 1; renderStocks(); });
  $("#nextPage").addEventListener("click", () => { state.page += 1; renderStocks(); });
  $("#rangeSelect").addEventListener("change", (event) => {
    state.range = event.target.value;
    $("#chartValue").textContent = ({ "1D": "6,245.80", "1W": "6,318.20", "1M": "6,192.45", "1Y": "6,010.75" })[state.range];
    drawChart();
  });
  $$(".chart-tabs button").forEach((button) => button.addEventListener("click", () => {
    state.chart = button.dataset.chart;
    $$(".chart-tabs button").forEach((tab) => tab.classList.toggle("active", tab === button));
    drawChart();
  }));
  $("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = $("#formMessage");
    message.classList.remove("error");
    if (!form.checkValidity()) {
      message.textContent = state.language === "bn" ? "অনুগ্রহ করে সব ঘর সঠিকভাবে পূরণ করুন।" : "Please complete all fields with valid information.";
      message.classList.add("error");
      form.reportValidity();
      return;
    }
    message.textContent = state.language === "bn"
      ? "ফর্ম যাচাই সম্পন্ন—ডেমো হওয়ায় বার্তা পাঠানো হয়নি।"
      : "Form validated—message not sent because this is a demo.";
    form.reset();
  });
  const backToTop = $("#backToTop");
  window.addEventListener("scroll", () => backToTop.classList.toggle("visible", window.scrollY > 500), { passive: true });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("resize", drawChart);
  drawChart();
}

window.BangladeshShareMarket = {
  images: websiteImages,
  data: {
    mode: "sample",
    refreshIntervalMs: 60000,
    async load() {
      return { status: "sample", updatedAt: new Date().toISOString(), stocks: stockData };
    },
    configure(provider) {
      if (!provider || typeof provider.loadStocks !== "function" ||
          typeof provider.sourceName !== "string" || !provider.sourceName.trim() ||
          typeof provider.sourceUrl !== "string" || new URL(provider.sourceUrl).protocol !== "https:") {
        throw new TypeError("Configure with loadStocks(), a sourceName, and an HTTPS sourceUrl.");
      }
      const interval = provider.refreshIntervalMs ?? this.refreshIntervalMs;
      if (!Number.isFinite(interval) || interval < 10000) {
        throw new RangeError("Provider refreshIntervalMs must be at least 10000.");
      }
      marketDataProvider = provider;
      this.mode = "provider";
      if (refreshTimer) window.clearInterval(refreshTimer);
      refreshTimer = window.setInterval(refreshProviderStocks, interval);
      return refreshProviderStocks();
    },
    async refresh() {
      if (!marketDataProvider) throw new Error("No authorized market data provider has been configured.");
      return refreshProviderStocks();
    }
  }
};

document.addEventListener("DOMContentLoaded", initialize);
