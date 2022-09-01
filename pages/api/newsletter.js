import mailchimp from "@mailchimp/mailchimp_marketing";
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export default async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_ID, {
      email_address: email,
      status: "subscribed",
    });
    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({
      error: `An error occured, check and try again` || error.toString(),
    });
  }
};
