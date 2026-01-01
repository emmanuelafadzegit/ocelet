(async () => {
  const { data, error } = await supabase.auth.getSession();
  console.log("SESSION:", data);
  console.log("ERROR:", error);
})();
