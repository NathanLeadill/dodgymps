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

<h3>MPs that have been suspended</h3>
<section>
	<table>
		<thead>
			<tr>
				<th>MP Name</th>
				<th>MP Constituency</th>
				<th>MP Party</th>
				<th>Allegations</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Scott Benton</td>
				<td>Blackpool South</td>
				<td>Conservative</td>
				<td>Lobbying</td>
			</tr>
			<tr>
				<td>Chris Pincher</td>
				<td>Tamworth</td>
				<td>Conservative</td>
				<td>Sexual Misconduct</td>
			</tr>
			<tr>
				<td>Rob Roberts</td>
				<td>Delyn</td>
				<td>Conservative</td>
				<td>Sexual Harrasment</td>
			</tr>
			<tr>
				<td>Charlie Elphicke</td>
				<td>Dover</td>
				<td>Conservative</td>
				<td>Sexual Assault</td>
			</tr>
			<tr>
				<td>Neil Parish</td>
				<td>Tiverton and Honiton</td>
				<td>Conservative</td>
				<td>Watching porn in the commons</td>
			</tr>
			<tr>
				<td>Un-named Senior Tory MP</td>
				<td>Unknown</td>
				<td>Conservative</td>
				<td>4x Spiking & Sexual Assault</td>
			</tr>
			<tr>
				<td>Un-named Tory MP</td>
				<td>Unknown</td>
				<td>Conservative</td>
				<td>4 x Rape</td>
			</tr>
			<tr>
				<td>David Warburton</td>
				<td>Somerset and Frome</td>
				<td>Conservative</td>
				<td>Sexual Harrasment & Cocaine</td>
			</tr>
			<tr>
				<td>Imran Ahmad Khan</td>
				<td>Wakefield</td>
				<td>Conservative</td>
				<td>Child Sexual Assault</td>
			</tr>
			<tr>
				<td>Jeremy Corbyn</td>
				<td>Islington North</td>
				<td>Labour</td>
				<td>Anti-Semitism</td>
			</tr>
			<tr>
				<td>Mike Hill</td>
				<td>Hartlepool</td>
				<td>Labour</td>
				<td>Sexual Assault</td>
			</tr>
			<tr>
				<td>Rupa Huq</td>
				<td>Ealing Central</td>
				<td>Labour</td>
				<td>Racism</td>
			</tr>
			<tr>
				<td>Claudia Webb</td>
				<td>Leicester East</td>
				<td>Labour</td>
				<td>Harrassment</td>
			</tr>
			<tr>
				<td>Christina Rees</td>
				<td>Neath</td>
				<td>Labour</td>
				<td>Bullying</td>
			</tr>
			<tr>
				<td>Neil Coyle</td>
				<td>Bermondsey and Old Southwark</td>
				<td>Labour</td>
				<td>Racism</td>
			</tr>
		</tbody>
	</table>
</section>

<p>
	I'm working on creating a page for councillors so you can make sure your local elections vote
	isn't wasted also.
</p>
<a href="/councillors">Councillors</a>

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

	h3 {
		margin-top: 35px;
		text-align: center;
	}
	table tbody tr td {
		padding: 5px 25px;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
