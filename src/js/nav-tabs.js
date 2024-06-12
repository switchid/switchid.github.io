document.addEventListener("DOMContentLoaded", () => {
  let nav = document.querySelectorAll(".nav-tabs");
  if (nav.length) {
    let tabs = document.querySelectorAll(".nav-tabs > div");
    if (tabs.length) {
      tabs.forEach(function (child) {
        child.addEventListener("click", function (event) {
          clickTabs(event.target);
        });
      });
    } else {
      console.log("element tabs not found");
    }
  } else {
    console.log("element not found.");
  }
});

let clickTabs = (tabs) => {
  let target = tabs.dataset.target ?? undefined;
  let tabsContent = document.querySelectorAll('.tabs-content');
  // let targetContent = target ? document.querySelectorAll(target)[0] : undefined;
  tabsContent?.forEach(function(child){
    if(child.getAttribute("id").replace (/^/,'#') !== target ){
      child.classList.remove('flex');
      child.classList.remove('hidden');
      child.classList.add('hidden');
    }else{
      child.classList.remove('hidden');
      child.classList.add('flex');
      let activeTabs = document.querySelector('.navtabs > div,.active-tabs');
      activeTabs.classList.remove('active-tabs','border','bg-white','text-black');
      activeTabs.classList.add('border-0','bg-transparent','text-white');
      tabs.classList.remove('border-0','bg-transparent','text-white');
      tabs.classList.add('border','bg-white','text-black','active-tabs');
    }
  });
};
