const contactFormModel = require("../models/contact_form.models");
const join_formModels = require("../models/join_form.models");
const { sendMailWithGmail } = require("../services/email.services");
const { ConfidentialClientApplication } = require('@azure/msal-node');

const clientId = process.env.AZURE_CLIENT_ID;
const clientSecret = process.env.AZURE_CLIENT_SECRET;
const tenantId = process.env.AZURE_TENANT_ID;

const msalInstance = new ConfidentialClientApplication({
  auth: {
    clientId: clientId,
    clientSecret: clientSecret,
    authority: `https://login.microsoftonline.com/${tenantId}`
  }
});


const getAccessToken = async () => {
  try {
    const response = await msalInstance.acquireTokenByClientCredential({
      scopes: ['https://graph.microsoft.com/.default'],
    });
    return response.accessToken;
  } catch (error) {
    console.error('Token error:', error);
    throw error;
  }
};

const sendEmailViaGraphAPI = async (emailData) => {
  try {
    const accessToken = await getAccessToken();

    const emailPayload = {
      message: {
        subject: emailData.subject,
        body: {
          contentType: "HTML", // or "Text"
          content: emailData.html || emailData.text
        },
        toRecipients: [
          {
            emailAddress: {
              address: emailData.to
            }
          }
        ],
        from: {
          emailAddress: {
            address: "info@1ststeps.com.sa"
          }
        }
      },
      saveToSentItems: true
    };

    const response = await fetch(
      'https://graph.microsoft.com/v1.0/users/info@1ststeps.com.sa/sendMail',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Graph API Error: ${response.status} - ${errorData}`);
    }

    console.log('✅ Email sent successfully via Graph API');
    return { success: true, status: response.status };

  } catch (error) {
    console.error('❌ Graph API email error:', error.message);
    throw error;
  }
};
const createFromContact = async (req, res) => {
  try {
    const data = req.body;

    const emailData = {
      to: `info@1ststeps.com.sa`,
      subject: "1stSteps contact us massage",
      text: "Send a 'Contact' message on your 1stSteps Website",
      html: `
      <h2>Send a 'Join' letter on your 1stSteps Website</h2>
      <h3>Client Information:</h3>
      <p><strong>Name:</strong> ${data?.name}</p>
      <p><strong>Email:</strong> ${data?.email}</p>
      <p><strong>Mobile:</strong> ${data?.telephone}</p>
      <p><strong>Inquiry:</strong> ${data?.inquiry}</p>


    `
    };

    await sendEmailViaGraphAPI(emailData);

    return res.status(200).json({
      status: "success",
      message: "Join add success",
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error });
  }
};

const getAllContactFromData = async (req, res) => {
  //   console.log("user", req.user);
  try {
    const join = await contactFormModel.find({});

    return res.status(201).send(join);
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
};
const createConsult = async (req, res) => {
  console.log("Received consultation request:", req.body);

  try {
    const { name, email, mobile, companyName, companyWebsite, industry, appointmentDate, appointmentTime, businessNeeds, forecastPlan, clientCount, foundedDate, employeeCount, technology, cashFlow, culture, brand } = req.body;

    const emailData = {
      to: `info@1ststeps.com.sa`,
      subject: "New Consultation Request",
      html: `
          <h2>New Consultation Request</h2>
          <h3>Client Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Website:</strong> ${companyWebsite}</p>

          <h3>Business Details:</h3>
          <p><strong>What Is Your Industry?</strong> ${industry}</p>
          <p><strong>When Was Your Company Founded?</strong> ${foundedDate}</p>
          <p><strong>Do You Have Any Plans Or Forecast For The Coming 3 Years?:</strong> ${forecastPlan}</p>
          <p><strong>How Many Clients You Have?</strong> ${clientCount}</p>
          <p><strong>How Many Total Full Time Employees You Have?</strong> ${employeeCount}</p>
          <p><strong>How Advanced Your Running Business Through Technology?</strong> ${technology}</p>
          <p><strong>What Is Your Cash Flow Position?</strong> ${cashFlow}</p>
          <p><strong>How Do You Categorize The Culture Of Your Company?</strong> ${culture}</p>
          <p><strong>How Do You Categorize The Brand Of Your Company?</strong> ${brand}</p>
          <p><strong>What is the primary reason for contacting 1st Steps Consulting?</strong> ${businessNeeds}</p>

          <h3>Appointment:</h3>
          <p><strong>Date:</strong> ${appointmentDate}</p>
          <p><strong>Time:</strong> ${appointmentTime}</p>

        `
    };

    await sendEmailViaGraphAPI(emailData);

    return res.status(201).json({
      status: "success",
      message: "Consultation request received and emails sent",
    });
  } catch (error) {
    console.error("Error in createConsult:", error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const createFromJoin = async (req, res) => {
  try {
    const data = req.body;
    console.log(data, "comes");

    const emailData = {
      to: `info@1ststeps.com.sa`,
      subject: "1stSteps join us message",
      html: `
          <h2>Send a 'Join' letter on your 1stSteps Website</h2>
          <h3>Client Information:</h3>
          <p><strong>Name:</strong> ${data?.name}</p>
          <p><strong>Email:</strong> ${data?.email}</p>
          <p><strong>Mobile:</strong> ${data?.telephone}</p>
          <p><strong>Company:</strong> ${data?.company}</p>
          <p><strong>Cover Letter:</strong> ${data?.cover_letter}</p>
          <p><strong>Expertise:</strong> ${data?.expertise}</p>
        `
    };

    await sendEmailViaGraphAPI(emailData);

    return res.status(200).json({
      status: "success",
      message: "Join add success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error });
  }
};
const suscribeNewsletter = async (req, res) => {
  try {
    const data = req.body;

    console.log(data, "comes");
    const emailData = {
      to: `info@1ststeps.com.sa`,
      subject: "1stSteps Subscription",
      html: `
          <h2>NewsLetter Subscription</h2>
          <h3>Client Information:</h3>
          <p><strong>Email:</strong> ${data?.email}</p>


        `
    };
    await sendEmailViaGraphAPI(emailData);
    // sendMailWithGmail(mailData);

    // const from = await join_formModels.create(data);

    return res.status(200).json({
      status: "success",
      message: "Join add success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error });
  }
};

const getAllJoinFromData = async (req, res) => {
  //   console.log("user", req.user);
  try {
    const join = await join_formModels.find({});

    return res.status(201).send(join);
  } catch (error) {
    return res.status(401).json({ status: "error", message: error.massages });
  }
};

module.exports = {
  createFromContact,
  getAllContactFromData,
  createFromJoin,
  suscribeNewsletter,
  getAllJoinFromData,
  createConsult,
};
