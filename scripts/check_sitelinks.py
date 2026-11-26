sitelinks = [
    {
        'text': 'Griha Pravesh Puja',
        'desc1': 'Vastu Shanti & Hawan in Hindi',
        'desc2': 'Same-Day Booking in Bangalore',
        'url': 'https://northhindipandit.com/services/griha-pravesh-puja-bangalore/'
    },
    {
        'text': 'Satyanarayan Katha',
        'desc1': 'Traditional Vedic Katha Vidhi',
        'desc2': 'Pure Sanskrit & Hindi Meaning',
        'url': 'https://northhindipandit.com/services/satyanarayan-puja-bangalore/'
    },
    {
        'text': 'Ganesh Puja Booking',
        'desc1': 'Home & Office Shubh Muhurat',
        'desc2': 'Modak Aarti & Complete Samagri',
        'url': 'https://northhindipandit.com/services/ganesh-puja-bangalore/'
    },
    {
        'text': 'Rudrabhishek Puja',
        'desc1': 'Sacred Shiva Abhishek at Home',
        'desc2': 'Panchamrit & Bilva Patra Vidhi',
        'url': 'https://northhindipandit.com/services/rudrabhishek-puja-bangalore/'
    },
    {
        'text': 'North Indian Marriage',
        'desc1': 'Vedic Vivah Sanskar & Hawan',
        'desc2': 'Saptapadi & Kanyadaan Rituals',
        'url': 'https://northhindipandit.com/services/marriage-puja-bangalore/'
    },
    {
        'text': 'Maha Mrityunjaya Jaap',
        'desc1': 'Health & Divine Protection',
        'desc2': 'Vedic Chanting & Samput Hawan',
        'url': 'https://northhindipandit.com/services/maha-mrityunjaya-jaap-bangalore/'
    },
    {
        'text': 'Bhoomi Puja Bangalore',
        'desc1': 'Foundation & Plot Shila Pujan',
        'desc2': 'Vastu Kuber Hawan & Blessings',
        'url': 'https://northhindipandit.com/services/bhoomi-puja-bangalore/'
    },
    {
        'text': 'Explore All 15 Pujas',
        'desc1': 'Vedic Ceremonies Across Town',
        'desc2': 'Check Muhurat & Samagri List',
        'url': 'https://northhindipandit.com/services/'
    },
    {
        'text': 'About Pandit Nilesh',
        'desc1': '15+ Years Gurukul Experience',
        'desc2': 'Authentic North Indian Vidhi',
        'url': 'https://northhindipandit.com/about-us/'
    },
    {
        'text': 'Contact & Book Now',
        'desc1': 'Call or WhatsApp 6206471543',
        'desc2': 'Doorstep Visits in Bangalore',
        'url': 'https://northhindipandit.com/contact-us/'
    }
]

print(f"=== CHECKING {len(sitelinks)} SITELINKS AGAINST GOOGLE ADS LIMITS ===")
all_ok = True
for i, s in enumerate(sitelinks, 1):
    t_len = len(s['text'])
    d1_len = len(s['desc1'])
    d2_len = len(s['desc2'])
    t_ok = t_len <= 25
    d1_ok = d1_len <= 35
    d2_ok = d2_len <= 35
    status = "PASS" if (t_ok and d1_ok and d2_ok) else "FAIL"
    if status == "FAIL":
        all_ok = False
    print(f"[{status}] #{i:2} Text: '{s['text']}' ({t_len}/25)")
    print(f"         D1:   '{s['desc1']}' ({d1_len}/35)")
    print(f"         D2:   '{s['desc2']}' ({d2_len}/35)")
    print(f"         URL:  {s['url']}")

print(f"\nAll sitelinks 100% compliant: {all_ok}")
