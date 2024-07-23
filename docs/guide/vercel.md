# Vercel

## Deploy button

Quickly deploy it to vercel to your own account with no configuration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Famvstrm%2Famvstrm%2Ftree%2Fv2&env=API_URL,VERSION&envDescription=API_URL%20and%20Version%20are%20required...&envLink=https%3A%2F%2Fdocs.amvstr.ml%2Fguide%2Fconfiguration%23frontend)

## Manual deploy

### Prerequisites

- A Vercel account
- A GitHub account
- Git CLI installed on your local machine
- Node.js and npm installed on your local machine

### Step 1: Fork and Clone the Repository

1. Fork our repo by clicking on the "Fork" button on the top right corner of the repository page.
2. Clone the forked repository to your local machine using the Git CLI.

   ```bash
   git clone https://github.com/<your-username>/amvstrm.git
   ```

### Step 2: Install Dependencies (Optional)

1. Navigate to the cloned repository directory using the terminal.
2. Install the dependencies using npm.

   ```bash
   npm install
   ```

### Step 3: Set Environment Variables

Rename the .env.example to .env and then configure any thing for your liking.

```env
API_URL= <Your API URL or Our default API URL>
VERSION=v2 <Default version>

# OPTIONAL (For tracking)
POSTHOG_PK=
POSTHOG_HOST=
```

### Step 4: Deploy to Vercel

1. Install the Vercel CLI using npm.

   ```bash
   npm install -g vercel
   ```

2. Login to your Vercel account using the following command.

   ```bash
   vercel login
   ```

3. Navigate to the cloned repository directory using the terminal.
4. Deploy the application to Vercel using the following command.

   ```bash
   vercel --prod
   ```

5. Follow the prompts to complete the deployment process.

Once the deployment is complete, you can access the application by visiting the URL provided by Vercel.  

Congratulations! You have successfully deployed our application to the web...
