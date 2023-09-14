export default function Tabs() {
  const styles = {
    h3: "bg-[#e4e9fd] text-center py-4 cursor-pointer font-bold",
    activeH3: "bg-[#e4e9fd] text-center py-4 cursor-pointer font-bold bg-white"
  }

  const isActive = true
    
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))]">
      <h3 className={styles.h3}>Tab 1</h3>
      <h3 className={styles.h3}>Tab 2</h3>
    </div>
  );
}
