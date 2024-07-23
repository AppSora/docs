# Bookmark

amvstrm's Bookmarker is used to bookmarked anime and it is entirely local and you can export it and import it to already available self-hosted amvstrm site.

![undefined](/docs_assets/ani_pg_bk.png){width="600"}

## Usage

Bookmark button will appear on the front page card or in the information page. You can bookmarked or unbookmarked anytime.

![undefined](/docs_assets/bk_pg.png){width="600"}

### Import data

You can easily import data from your export and Import it any amvstrm's compatible website!

![import_guide.gif](/docs_assets/import_guide.gif)

> [!WARNING]
> Never modify the file name and data inside the JSON file because it contained important information that will validate the file.

### Cloud integration

> [!INFO]
> We removed the cloud integration because it is not easy for everyone to set up...

## Bookmarker's FAQ

- **What data will be exported?** : Your data including play times, bookmarked anime, and latest watch history will be exported into one JSON file.
- **Where is the data stored?** : Your data will be stored locally in your browser using localStorage.
- **Why not use the cloud?** : I want to make amvstrm as local as possible and easier to self-host without the need for annoying environment configuration. Even though cloud saving gives us so many advantages, it is still annoying to set up and expensive once it grows. Feel free to contribute or fork our repository if you want to rework or add authentication and more stuff to it.
- **Why i got an error when importing my data?** : We validate the file using ID from file name and ID inside the data.

  ```js
  const validateImportedData = (importedData, expectedBmkid) => {
    try {
      const data = JSON.parse(importedData);
      if (data.bmkid !== expectedBmkid) {
        throw new Error(
          `BMKID mismatch: expected ${expectedBmkid}, got ${data.bmkid}`
        );
      }
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  ```
