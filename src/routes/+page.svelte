<script>
  import { enhance } from '$app/forms';
  import '../app.css';

  let emails = '';
  let result = null;

  function handleSubmit(event) {
    result = null;
  }

  let year = new Date().getFullYear();
</script>

<div class="text-white">
  <h1 class="text-6xl font-thin mb-4 text-center">
    TestFlight Hub
  </h1>
<p class="font-thin">Reach out to testers easily. Enter their email addresses and invite them to test your Android app.</p>

</div>
<form method="POST" use:enhance={() => {
  return async ({ result }) => {
    result = result.data;
  };
}} on:submit={handleSubmit}
  class="flex flex-col justify-center gap-4 mt-20 max-w-md text-white mx-auto"
>
  <label class="text-sm text-center" for="emails">
    Enter tester email addresses (comma-separated):
  </label>
    <textarea class="textarea md:w-96 text-warning ring-2 ring-orange-600" id="emails" name="emails" bind:value={emails} rows="5" required placeholder="e.g. tester1@gmail.com, tester2@gmail.com"></textarea>
  <button type="submit" class="btn ring-orange-600 ring-2">
    Send Invitations
  </button>
</form>

{#if result}
  <p class={result.success ? 'success' : 'error'}>
    {result.success ? '🎉 Success! ' : '⚠️ Oops! '} {result.message}
  </p>
{/if}

<style>
  .success {
    text-align: center;
    color: #4caf50;
  }

  .error {
    text-align: center;
    color: #ff4c4c;
  }
</style>
