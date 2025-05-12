// RecipeCard.js

class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	
		const article = document.createElement("article");
		const styleElem = document.createElement("style");
		styleElem.textContent = `
		  :host {
			display: block;
			font-family: 'Roboto', 'Helvetica Neue', sans-serif;
			box-shadow: 0 1px 3px rgba(60, 64, 67, 0.3);
			border-radius: 8px;
			background-color: #fff;
			overflow: hidden;
			transition: box-shadow 0.3s ease;
			max-width: 360px;
			margin: 12px auto;
		  }
		
		  :host(:hover) {
			box-shadow: 0 4px 8px rgba(60, 64, 67, 0.3);
		  }
		
		  article {
			padding: 16px;
		  }
		
		  img {
			width: 100%;
			height: auto;
			object-fit: cover;
			border-bottom: 1px solid #eee;
		  }
		
		  .title {
			font-size: 1.1rem;
			font-weight: 500;
			margin: 12px 0 4px;
		  }
		
		  .title a {
			text-decoration: none;
			color: #1a73e8;
		  }
		
		  .title a:hover {
			text-decoration: underline;
		  }
		
		  .organization {
			font-size: 0.9rem;
			color: #5f6368;
			margin-bottom: 8px;
		  }
		
		  .rating {
			display: flex;
			align-items: center;
			font-size: 0.9rem;
			color: #fbbc04;
			margin-bottom: 8px;
		  }
		
		  .rating span:last-child {
			color: #5f6368;
			font-size: 0.85rem;
			margin-left: 6px;
		  }
		
		  time {
			display: block;
			font-size: 0.85rem;
			color: #5f6368;
			margin-bottom: 8px;
		  }
		
		  .ingredients {
			font-size: 0.9rem;
			color: #202124;
			line-height: 1.4;
		  }
		`;
		
		this.shadow.appendChild(styleElem);
		this.shadow.appendChild(article);
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;

		// A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
		// A7. TODO - Set the contents of the <article> with the <article> template given in
		//           cardTemplate.html and the data passed in (You should only have one <article>,
		//           do not nest an <article> inside another <article>). You should use template
		//           literals (template strings) and element.innerHTML for this.
		// 			 Do NOT include the <article> tags within the innerHTML of the element you create.
		//           Remember to replace all the placeholders in the template with the data passed in.
		//           i.e. imgSrc, titleLnk, etc
		
		const article = this.shadow.querySelector("article");
		article.innerHTML = `
			<img src="${data.imgSrc}" alt="${data.imgAlt}">
			<p class="title">
				<a href="${data.titleLnk}">${data.titleTxt}</a>
			</p>
			<p class="organization">${data.organization}</p>
			<div class="rating">
				<span>${'★'.repeat(data.rating)}${'☆'.repeat(5 - data.rating)}</span>
				<span>(${data.numRatings})</span>
			</div>
			<time>${data.lengthTime}</time>
			<p class="ingredients">${data.ingredients}</p>
		`;
	}
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define("recipe-card", RecipeCard);
