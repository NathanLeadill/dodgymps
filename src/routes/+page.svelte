<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h2>Dodgy MP's coming soon</h2>
	<sub
		>I'm going to build a pretty looking website with the ability to pull fresh allegations
		automatically, due to my day job having a hard deadline of the 1st May, this may take me a few
		weeks to get it up and running properly. Below I'm going to list all the people who have had
		allegations of being a dodgy mp made against them. If you want to help me, please submit an
		information report.</sub
	>
</section>
<sub>Notice which party is full of people who commit sexual offences...</sub>
<section>
	<h1>MPs who have been suspended by their party.</h1>
	<ul>
		<li>Scott Benton - Blackpool South - Conservative - Lobbying</li>
		<li>Chris Pincher - Tamworth - Conservative - Sexual Misconduct</li>
		<li>Rob Roberts - Delyn - Conservative - Sexual Harrasment</li>
		<li>Charlie Elphicke - Dover - Conservative - Sexual Assault</li>
		<li>Neil Parish - Tiverton and Honiton - Conservative - Watching Porn In the Commons</li>
		<li>
			Un-named Senior Tory MP - Unknown - Conservative - 4x Spiking & Sexual Assault -
			<br />https://www.mirror.co.uk/news/politics/top-tory-mp-faces-drink-27030008
		</li>
		<li>
			Un-named Tory MP - Unknown - Conservative - Rape x 4 -
			<br
			/>https://www.standard.co.uk/news/politics/tory-mp-rape-arrest-bail-court-metropolitan-police-b1070244.html
		</li>
		<li>David Warburton - Somerset and Frome - Conservative - Sexual Harrasment & Cocaine</li>
		<li>Imran Ahmad Khan - Wakefield - Conservative - Child Sexual Assault</li>
		<li>Jeremy Corbyn - Islington North - Labour - Anti-Semitism</li>
		<li>Mike Hill - Hartlepool - Labour - Sexual Assault</li>
		<li>Rupa Huq - Ealing Central - Labour - Racism</li>
		<li>Claudia Webb - Leicester East - Labour - Harrasment</li>
		<li>Christina Rees - Neath - Labour - Bullying</li>
		<li>Neil Coyle - Bermondsey and Old Southwark - Labour - Racism</li>
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
