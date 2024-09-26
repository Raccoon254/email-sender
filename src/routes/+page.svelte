<script>
  import { enhance } from '$app/forms';

  let emails = '';
  let result = null;

  function handleSubmit(event) {
    result = null;
  }
</script>

<h1>TestFlight Hub</h1>
<p>Reach out to testers easily. Enter their email addresses and invite them to test your Android app.</p>

<form method="POST" use:enhance={() => {
  return async ({ result }) => {
    result = result.data;
  };
}} on:submit={handleSubmit}>
  <label for="emails">
    Enter tester email addresses (comma-separated):
    <textarea id="emails" name="emails" bind:value={emails} rows="5" required placeholder="e.g. tester1@gmail.com, tester2@gmail.com"></textarea>
  </label>
  <button type="submit">Send Invitations</button>
</form>

{#if result}
  <p class={result.success ? 'success' : 'error'}>
    {result.success ? '🎉 Success! ' : '⚠️ Oops! '} {result.message}
  </p>
{/if}

<style>
  :global(body) {
    background-color: #1a1a1a;
    color: #f1f1f1;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
    color: #00adb5;
  }

  p {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 1rem auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #2c2c2c;
    border-radius: 10px;
  }

  label {
    font-weight: bold;
  }

  textarea {
    margin-top: 0.5rem;
    padding: 0.75rem;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: #00adb5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #007a83;
  }

  .success {
    text-align: center;
    color: #4caf50;
  }

  .error {
    text-align: center;
    color: #ff4c4c;
  }
</style>
