for(let i = 0; i<arr1.length;i++)
{
  for(let j = i+1 ;j<arr1.length;j++)
  {
    if(arr1[i]>arr1[j])
    {
        let temapp = arr1[i];
        arr1[i]=arr1[j];
        arr1[j]=temapp;
    }
  }
}