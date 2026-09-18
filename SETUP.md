# Oxford Newman Network — setting the site up

Three jobs, about an hour in total. Nothing here needs code to be written; where a
file has to be changed, the exact line is given.

The site works before any of this — it simply shows the content that is built into it.
Supabase adds the ability to edit that content yourself from the admin page.

---

## 1. Supabase — where the content and the photographs live

1. Go to **supabase.com**, sign in with GitHub, and create a new project.
   Choose the London region. Note the database password somewhere safe.
2. In the left-hand menu open **SQL Editor → New query**. Open `supabase-setup.sql`
   from this project, copy all of it into the editor, and press **Run**.
   It creates the content table, the picture store, and the permissions.
3. Open **Project Settings → API**. Copy two things:
   - **Project URL** (looks like `https://abcdefghijkl.supabase.co`)
   - the **anon public** key (a long string)
4. Open `config.js` in this project and paste them in:

   ```js
   window.ONN_CONFIG = {
     url: 'https://abcdefghijkl.supabase.co',
     anonKey: 'the long anon public key'
   };
   ```

   Both are safe to publish. The rules you ran in step 2 mean the anon key can only
   *read* the site; changing anything requires a log-in.
5. Open **Authentication → Users → Add user** and create a log-in (email and password)
   for each of the two or three people who will edit the site. Turn **Auto Confirm User** on.
   In **Authentication → Providers**, switch **Allow new users to sign up** off, so nobody
   else can make themselves an editor.

---

## 2. GitHub and hosting

1. Create a new repository on GitHub — `oxford-newman-network`, private or public as you prefer.
2. Upload the files from this project into it (GitHub's web uploader is fine — drag them in):
   `Oxford Newman Network.dc.html`, `Admin.dc.html`, `onn-data.js`, `config.js`,
   `image-slot.js`, `support.js`, `vercel.json`, and the `assets` folder.
3. Go to **vercel.com** (or Cloudflare Pages), sign in with GitHub, and **Import** that
   repository. There is nothing to build — accept the defaults and deploy.
4. In Vercel: **Settings → Domains → Add**, and enter **oxfordnewmannetwork.org**.
   Add **www.oxfordnewmannetwork.org** as well and let Vercel redirect it to the plain name.
   Vercel then shows the DNS records to create at whoever you bought the domain from —
   usually an **A** record for `@` pointing at `76.76.21.21`, and a **CNAME** for `www`
   pointing at `cname.vercel-dns.com`. Add them there; the certificate appears by itself
   within the hour.

The site is then live on your own domain, with a certificate, free at this size.

### Web addresses

`vercel.json` is already in this project and does the tidying for you:

- **oxfordnewmannetwork.org** — the site
- **oxfordnewmannetwork.org/admin** — the editing page

Upload it with the rest of the files and nothing further is needed.

---

## 3. Editing the site from then on

Go to **oxfordnewmannetwork.org/admin**, sign in with the email and password made in step 5, and
choose a section on the left:

| Section | What it controls |
| --- | --- |
| Home page | The line above the quotation, the quotation, the description of the Network |
| Current term | The term named on the seminars page and the home page card |
| Seminars | This term's list. The first one is the "Next seminar" on the home page |
| Previous terms | The list at the foot of the seminars page |
| News | Every news item, its photograph, caption, extract and link |
| Key dates | The chronology, a block per period; one date per line: `1822 \| Elected Fellow of Oriel.` |
| Conferences | Conferences and panels, with the list of speakers beside each |
| People | Names, roles, biographies and photographs |

Press **Save** on each section after changing it — the site shows the change on its next load.
Photographs can be uploaded straight from your computer with the **Choose file** button;
they are stored in Supabase and used at their new web address.

Nothing you do in the admin page can break the site: if a section has never been saved,
the site falls back to the content built into it.

---

## Still to add

- The photograph of the Oriel delegation with Pope Leo (News page — the empty frame).
- The full text of the Pope's address to Oriel (News → the Oriel item → Longer extract).
- A photograph from the Convergence panel or the exhibition.
- Real names, roles and photographs on the People page.
- The Oriel chapel window photograph is at present the watermarked Alamy copy;
  replace it with the licensed file when you have it (`assets/stained-glass-oriel.jpg`).
