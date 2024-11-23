/*PLEASE DO NOT EDIT THIS CODE*/
/*This code was generated using the UMPLE 1.35.0.7523.c616a4dce modeling language!*/

package models;
import java.sql.Date;
import java.util.*;

// line 14 "../CodeGym.ump"
public class WorkoutPlan
{

  //------------------------
  // STATIC VARIABLES
  //------------------------

  private static int nextId = 1;

  //------------------------
  // MEMBER VARIABLES
  //------------------------

  //WorkoutPlan Attributes
  private Date endDate;

  //Autounique Attributes
  private int id;

  //WorkoutPlan Associations
  private List<Exercise> exercises;
  private User user;

  //------------------------
  // CONSTRUCTOR
  //------------------------

  public WorkoutPlan(Date aEndDate, User aUser)
  {
    endDate = aEndDate;
    id = nextId++;
    exercises = new ArrayList<Exercise>();
    boolean didAddUser = setUser(aUser);
    if (!didAddUser)
    {
      throw new RuntimeException("Unable to create workoutPlan due to user. See https://manual.umple.org?RE002ViolationofAssociationMultiplicity.html");
    }
  }

  //------------------------
  // INTERFACE
  //------------------------

  public boolean setEndDate(Date aEndDate)
  {
    boolean wasSet = false;
    endDate = aEndDate;
    wasSet = true;
    return wasSet;
  }

  public Date getEndDate()
  {
    return endDate;
  }

  public int getId()
  {
    return id;
  }
  /* Code from template association_GetMany */
  public Exercise getExercise(int index)
  {
    Exercise aExercise = exercises.get(index);
    return aExercise;
  }

  public List<Exercise> getExercises()
  {
    List<Exercise> newExercises = Collections.unmodifiableList(exercises);
    return newExercises;
  }

  public int numberOfExercises()
  {
    int number = exercises.size();
    return number;
  }

  public boolean hasExercises()
  {
    boolean has = exercises.size() > 0;
    return has;
  }

  public int indexOfExercise(Exercise aExercise)
  {
    int index = exercises.indexOf(aExercise);
    return index;
  }
  /* Code from template association_GetOne */
  public User getUser()
  {
    return user;
  }
  /* Code from template association_MinimumNumberOfMethod */
  public static int minimumNumberOfExercises()
  {
    return 0;
  }
  /* Code from template association_AddManyToOne */
  public Exercise addExercise(String aName, int aReps)
  {
    return new Exercise(aName, aReps, this);
  }

  public boolean addExercise(Exercise aExercise)
  {
    boolean wasAdded = false;
    if (exercises.contains(aExercise)) { return false; }
    WorkoutPlan existingWorkoutPlan = aExercise.getWorkoutPlan();
    boolean isNewWorkoutPlan = existingWorkoutPlan != null && !this.equals(existingWorkoutPlan);
    if (isNewWorkoutPlan)
    {
      aExercise.setWorkoutPlan(this);
    }
    else
    {
      exercises.add(aExercise);
    }
    wasAdded = true;
    return wasAdded;
  }

  public boolean removeExercise(Exercise aExercise)
  {
    boolean wasRemoved = false;
    //Unable to remove aExercise, as it must always have a workoutPlan
    if (!this.equals(aExercise.getWorkoutPlan()))
    {
      exercises.remove(aExercise);
      wasRemoved = true;
    }
    return wasRemoved;
  }
  /* Code from template association_AddIndexControlFunctions */
  public boolean addExerciseAt(Exercise aExercise, int index)
  {  
    boolean wasAdded = false;
    if(addExercise(aExercise))
    {
      if(index < 0 ) { index = 0; }
      if(index > numberOfExercises()) { index = numberOfExercises() - 1; }
      exercises.remove(aExercise);
      exercises.add(index, aExercise);
      wasAdded = true;
    }
    return wasAdded;
  }

  public boolean addOrMoveExerciseAt(Exercise aExercise, int index)
  {
    boolean wasAdded = false;
    if(exercises.contains(aExercise))
    {
      if(index < 0 ) { index = 0; }
      if(index > numberOfExercises()) { index = numberOfExercises() - 1; }
      exercises.remove(aExercise);
      exercises.add(index, aExercise);
      wasAdded = true;
    } 
    else 
    {
      wasAdded = addExerciseAt(aExercise, index);
    }
    return wasAdded;
  }
  /* Code from template association_SetOneToMany */
  public boolean setUser(User aUser)
  {
    boolean wasSet = false;
    if (aUser == null)
    {
      return wasSet;
    }

    User existingUser = user;
    user = aUser;
    if (existingUser != null && !existingUser.equals(aUser))
    {
      existingUser.removeWorkoutPlan(this);
    }
    user.addWorkoutPlan(this);
    wasSet = true;
    return wasSet;
  }

  public void delete()
  {
    while (exercises.size() > 0)
    {
      Exercise aExercise = exercises.get(exercises.size() - 1);
      aExercise.delete();
      exercises.remove(aExercise);
    }
    
    User placeholderUser = user;
    this.user = null;
    if(placeholderUser != null)
    {
      placeholderUser.removeWorkoutPlan(this);
    }
  }


  public String toString()
  {
    return super.toString() + "["+
            "id" + ":" + getId()+ "]" + System.getProperties().getProperty("line.separator") +
            "  " + "endDate" + "=" + (getEndDate() != null ? !getEndDate().equals(this)  ? getEndDate().toString().replaceAll("  ","    ") : "this" : "null") + System.getProperties().getProperty("line.separator") +
            "  " + "user = "+(getUser()!=null?Integer.toHexString(System.identityHashCode(getUser())):"null");
  }
}