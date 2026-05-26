# EmailJS Email Template for Huzz Solutions Contact Form

## Template Setup Instructions

### In EmailJS Dashboard:
1. Go to **Email Templates** → **Create New Template**
2. Set **From Name**: `Huzz Solutions Form`
3. Set **To Email**: `huzzghana@gmail.com` (or use variable `{{to_email}}`)
4. Set **Subject**: `New Project Inquiry from {{from_name}}`
5. Copy the HTML below into the template editor

---

## HTML Email Template

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
        }
        .content {
            padding: 30px;
        }
        .section {
            margin-bottom: 25px;
        }
        .section-title {
            font-size: 14px;
            font-weight: 600;
            color: #667eea;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid #eee;
        }
        .info-label {
            font-weight: 600;
            color: #555;
            width: 150px;
        }
        .info-value {
            color: #333;
            flex: 1;
            text-align: right;
        }
        .description-box {
            background-color: #f9f9f9;
            border-left: 4px solid #667eea;
            padding: 15px;
            margin-top: 15px;
            border-radius: 4px;
        }
        .description-box p {
            margin: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .footer {
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #888;
            border-top: 1px solid #eee;
        }
        .cta-button {
            display: inline-block;
            background-color: #667eea;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 20px;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>🚀 New Project Inquiry</h1>
            <p>You've received a new project request from Huzz Solutions</p>
        </div>

        <!-- Main Content -->
        <div class="content">
            <!-- Sender Information -->
            <div class="section">
                <div class="section-title">📋 From</div>
                <div class="info-row">
                    <div class="info-label">Name:</div>
                    <div class="info-value">{{from_name}}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Email:</div>
                    <div class="info-value">{{from_email}}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Company:</div>
                    <div class="info-value">{{company}}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Phone:</div>
                    <div class="info-value">{{phone}}</div>
                </div>
            </div>

            <!-- Project Details -->
            <div class="section">
                <div class="section-title">🎯 Project Details</div>
                <div class="info-row">
                    <div class="info-label">Project Type:</div>
                    <div class="info-value">{{project_type}}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Budget:</div>
                    <div class="info-value">{{budget}}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Timeline:</div>
                    <div class="info-value">{{timeline}}</div>
                </div>
            </div>

            <!-- Project Description -->
            <div class="section">
                <div class="section-title">📝 Project Description</div>
                <div class="description-box">
                    <p>{{description}}</p>
                </div>
            </div>

            <!-- Call to Action -->
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee;">
                <p style="color: #666; font-size: 14px;">Next Steps:</p>
                <a href="mailto:{{reply_to}}" class="cta-button">Reply to Inquiry</a>
                <p style="color: #999; font-size: 12px; margin-top: 15px;">
                    Or respond directly to this email to contact {{from_name}}
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2026 Huzz Solutions. All rights reserved.</p>
            <p>This email was sent from your contact form at huzzghana@gmail.com</p>
        </div>
    </div>
</body>
</html>
```

---

## Plain Text Alternative (Optional)

If you want a plain text version, use this:

```
NEW PROJECT INQUIRY
===================

FROM:
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

PROJECT DETAILS:
Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}

PROJECT DESCRIPTION:
{{description}}

---

Reply to: {{reply_to}}
```

---

## Template Variables Used

These must match exactly what we send from the form:

| Variable | Source | Type |
|----------|--------|------|
| `{{from_name}}` | formData.fullName | String |
| `{{from_email}}` | formData.email | String |
| `{{company}}` | formData.company | String |
| `{{phone}}` | formData.phone | String |
| `{{project_type}}` | formData.projectType | String |
| `{{budget}}` | formData.budget | String |
| `{{timeline}}` | formData.timeline | String |
| `{{description}}` | formData.description | String |
| `{{reply_to}}` | formData.email | String |
| `{{to_email}}` | 'huzzghana@gmail.com' | String (hardcoded) |

---

## Setup Steps in EmailJS

1. **Log in** to https://dashboard.emailjs.com
2. Go to **Email Templates**
3. Click **Create New Template**
4. Fill in:
   - **From Name**: `Huzz Solutions Form`
   - **To Email**: `{{to_email}}` (or `huzzghana@gmail.com`)
   - **Subject**: `New Project Inquiry from {{from_name}}`
   - **HTML Body**: Paste the HTML template above
5. Click **Save**
6. Note the **Template ID** (should be `template_21had1e`)
7. Go back to code and verify:
   - Service ID matches
   - Template ID matches
   - Public Key is correct

---

## Testing

Once the template is set up:
1. Return to the form at http://localhost:5173/contact
2. Fill out all 3 steps
3. Submit
4. Check your email at huzzghana@gmail.com - the formatted email should arrive!

Let me know once you've set up the template and I can test the form submission again!
