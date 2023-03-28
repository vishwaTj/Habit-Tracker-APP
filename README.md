

https://user-images.githubusercontent.com/109414918/228140625-f1d4840e-fc91-4edb-bff8-2569418d7478.mp4




https://user-images.githubusercontent.com/109414918/228140663-6704ef41-38ad-4a38-a650-b62772b34efe.mp4




                                                              HABIT TRACKER APP
          
          This is a habit tracker appp to track your habits on a weekly basis. The application is built using react and redux libraries. 
          
          
          The file system is divided into 3 parts 
                       1) Main index.js file
                       2) Components files containing all the components
                       3) Redux to handle the redux stoore
 
            index.js -> mainly has the import of provider for redux and its state and also routes
            
            
            
            Components -> this has all the component files
                      i) App.js -> contains pathing for the routes of Home and week pages
                      ii) Home.js -> main home page and also the input section is defined this also has child component Habit
                      iii) Habit.js -> This has the card baed display for each habit added and also claculates percentage of habit calculated routes to Week
                      iv) Week.js -> contains heading and also routing back to home page creates an iteration over all the days as DayCard
                      v) DayCard -> The DayCard continaas the import of habit completed and habit uncheck functions from reducer functions and also buttons to check
              
             Redux -> this contains the actions, reducers and the store needed for the Redux store
                      i) features -> HabitReducer.js ->continas all functions to handle changes 
                      ii) rootReducer
                      iii) store
