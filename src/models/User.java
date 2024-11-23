/*PLEASE DO NOT EDIT THIS CODE*/
/*This code was generated using the UMPLE 1.35.0.7523.c616a4dce modeling language!*/

package models;
import java.util.*;
import java.sql.Date;

// line 3 "../CodeGym.ump"
public class User
{

  //------------------------
  // STATIC VARIABLES
  //------------------------

  private static Map<String, User> usersByUsername = new HashMap<String, User>();

  //------------------------
  // MEMBER VARIABLES
  //------------------------

  //User Attributes
  private String username;
  private String password;

  //User Associations
  private List<WorkoutPlan> workoutPlans;

  //------------------------
  // CONSTRUCTOR
  //------------------------

  public User(String aUsername, String aPassword)
  {
    password = aPassword;
    if (!setUsername(aUsername))
    {
      throw new RuntimeException("Cannot create due to duplicate username. See https://manual.umple.org?RE003ViolationofUniqueness.html");
    }
    workoutPlans = new ArrayList<WorkoutPlan>();
  }

  //------------------------
  // INTERFACE
  //------------------------

  public boolean setUsername(String aUsername)
  {
    boolean wasSet = false;
    String anOldUsername = getUsername();
    if (anOldUsername != null && anOldUsername.equals(aUsername)) {
      return true;
    }
    if (hasWithUsername(aUsername)) {
      return wasSet;
    }
    username = aUsername;
    wasSet = true;
    if (anOldUsername != null) {
      usersByUsername.remove(anOldUsername);
    }
    usersByUsername.put(aUsername, this);
    return wasSet;
  }

  public boolean setPassword(String aPassword)
  {
    boolean wasSet = false;
    password = aPassword;
    wasSet = true;
    return wasSet;
  }

  public String getUsername()
  {
    return username;
  }
  /* Code from template attribute_GetUnique */
  public static User getWithUsername(String aUsername)
  {
    return usersByUsername.get(aUsername);
  }
  /* Code from template attribute_HasUnique */
  public static boolean hasWithUsername(String aUsername)
  {
    return getWithUsername(aUsername) != null;
  }

  public String getPassword()
  {
    return password;
  }
  /* Code from template association_GetMany */
  public WorkoutPlan getWorkoutPlan(int index)
  {
    WorkoutPlan aWorkoutPlan = workoutPlans.get(index);
    return aWorkoutPlan;
  }

  public List<WorkoutPlan> getWorkoutPlans()
  {
    List<WorkoutPlan> newWorkoutPlans = Collections.unmodifiableList(workoutPlans);
    return newWorkoutPlans;
  }

  public int numberOfWorkoutPlans()
  {
    int number = workoutPlans.size();
    return number;
  }

  public boolean hasWorkoutPlans()
  {
    boolean has = workoutPlans.size() > 0;
    return has;
  }

  public int indexOfWorkoutPlan(WorkoutPlan aWorkoutPlan)
  {
    int index = workoutPlans.indexOf(aWorkoutPlan);
    return index;
  }
  /* Code from template association_MinimumNumberOfMethod */
  public static int minimumNumberOfWorkoutPlans()
  {
    return 0;
  }
  /* Code from template association_AddManyToOne */
  public WorkoutPlan addWorkoutPlan(Date aEndDate)
  {
    return new WorkoutPlan(aEndDate, this);
  }

  public boolean addWorkoutPlan(WorkoutPlan aWorkoutPlan)
  {
    boolean wasAdded = false;
    if (workoutPlans.contains(aWorkoutPlan)) { return false; }
    User existingUser = aWorkoutPlan.getUser();
    boolean isNewUser = existingUser != null && !this.equals(existingUser);
    if (isNewUser)
    {
      aWorkoutPlan.setUser(this);
    }
    else
    {
      workoutPlans.add(aWorkoutPlan);
    }
    wasAdded = true;
    return wasAdded;
  }

  public boolean removeWorkoutPlan(WorkoutPlan aWorkoutPlan)
  {
    boolean wasRemoved = false;
    //Unable to remove aWorkoutPlan, as it must always have a user
    if (!this.equals(aWorkoutPlan.getUser()))
    {
      workoutPlans.remove(aWorkoutPlan);
      wasRemoved = true;
    }
    return wasRemoved;
  }
  /* Code from template association_AddIndexControlFunctions */
  public boolean addWorkoutPlanAt(WorkoutPlan aWorkoutPlan, int index)
  {  
    boolean wasAdded = false;
    if(addWorkoutPlan(aWorkoutPlan))
    {
      if(index < 0 ) { index = 0; }
      if(index > numberOfWorkoutPlans()) { index = numberOfWorkoutPlans() - 1; }
      workoutPlans.remove(aWorkoutPlan);
      workoutPlans.add(index, aWorkoutPlan);
      wasAdded = true;
    }
    return wasAdded;
  }

  public boolean addOrMoveWorkoutPlanAt(WorkoutPlan aWorkoutPlan, int index)
  {
    boolean wasAdded = false;
    if(workoutPlans.contains(aWorkoutPlan))
    {
      if(index < 0 ) { index = 0; }
      if(index > numberOfWorkoutPlans()) { index = numberOfWorkoutPlans() - 1; }
      workoutPlans.remove(aWorkoutPlan);
      workoutPlans.add(index, aWorkoutPlan);
      wasAdded = true;
    } 
    else 
    {
      wasAdded = addWorkoutPlanAt(aWorkoutPlan, index);
    }
    return wasAdded;
  }

  public void delete()
  {
    usersByUsername.remove(getUsername());
    while (workoutPlans.size() > 0)
    {
      WorkoutPlan aWorkoutPlan = workoutPlans.get(workoutPlans.size() - 1);
      aWorkoutPlan.delete();
      workoutPlans.remove(aWorkoutPlan);
    }
    
  }


  public String toString()
  {
    return super.toString() + "["+
            "username" + ":" + getUsername()+ "," +
            "password" + ":" + getPassword()+ "]";
  }
}